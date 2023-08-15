import * as WsNode from "ws";
import protobufjs from 'protobufjs'
import * as util from  "./util.js"
// import {aaa} from "./protobuf/proto/gateway.js"
import gatewayJson from "./protobuf/proto/gateway.json" assert { type: "json" };


/*
    pbjs.cmd -t json -o  gateway.json .\gateway.proto
    D:\devsoft\protoc.exe --go_out=plugins=grpc:d:\ .\gateway.proto
    webpack.cmd
    go install github.com/golang/protobuf/protoc-gen-go@v1.2.0
    cp .\dist\main.js D:\golang\zgoframe\static\js\

*/

class Ws{
    /*
        构造函数
        gatewayConfig：网关配置信息，主要用于连接
        actionMap：长连接的协议(自定义)相关，主要用于收发消息,拆包、解包
        gameMatchRule：心跳时间、帧数
        userToken：登陆/验证
    */
    constructor(gatewayConfig,actionMap,gameMatchRule,userToken,ContentType,ProtobufType) {
        this.userToken = userToken;
        // this.userToken = "112233445566";
        this.gatewayConfig = gatewayConfig;//网关配置信息
        this.actionMap = actionMap;//消息的ID映射
        this.gameMatchRule = gameMatchRule;//游戏匹配的配置信息

        this.wsObj = null;//WS连接的对象
        this.envMode = "";
        this.descPre = "ws ";//日志输出公共前缀
        this.status = Status.INIT;//初始化连接状态
        this.protocolType  = ContentType;//数据传输的协议类型
        this.contentType = ProtobufType;//数据传输的内容类型
        this.logicFrameLoopTimeMs = 0;//每秒多少帧
        this.heartbeatInterval = null;

        this.callbackClose = null;
        this.callbackOpen = null;
        this.callbackMessage = null;
        this.callbackError = null;

        console.log("start load proto json ")
        // this.pbRoot = protobufjs.loadSync("./protobuf/proto/gateway.proto");
        this.pbRoot = protobufjs.Root.fromJSON(gatewayJson);
        this.pbPackage = "pb.";

    }
    //创建ws长连接，也算是入口函数，得选建立WS连接，才有后续的所有操作
    Start (){
        this.Show("开始创建 ws 连接");
        if (this.status != Status.INIT && this.status != Status.CLOSE){
            return this.Show("ws status 错误， status  !=  init or close",1)
        }
        //根据帧数，计算出 秒数
        this.logicFrameLoopTimeMs = parseInt( 1000 / this.gameMatchRule.fps);
        this.Show("create new WebSocket url:"+this.GetUrl() +" FPS:" +this.gameMatchRule.fps + " ms:" + this.logicFrameLoopTimeMs +" contentType:" + this.contentType+" protocolType:" + this.protocolType)
        this.Show("register callback function( onopen onclose onmessage onerror  )")
        //创建ws连接
        this.wsObj = this.CreateWsObj();
        //设置 连接建立成功后的回调 函数
        let parent = this;
        this.wsObj.onopen = function(){
            parent.WsOnOpen();
        };
        //设置 关闭回调
        this.wsObj.onclose = function(ev){
            parent.WsOnClose(ev)
        };
        //设置 接收S端消息-回调
        this.wsObj.onmessage = function(ev){
            parent.WsOnMessage(ev)
        };
        //创建连接发生了错误
        this.wsObj.onerror = function(ev){
            parent.Show("wsObj onError:",ev);
        };
    }
    //连接成功后，回调
    WsOnOpen(){
        this.Show("onOpen , connect server Success  ");
        this.UpStatus(Status.CONNECTED);
        if (this.callbackOpen){
            this.callbackOpen();
        }
        //登陆验证
        var LoginObj = this.CreatePbObj(this.pbPackage+"Login");
        LoginObj.token = this.userToken;
        this.SendMsgById(90104,LoginObj);//CS_Login

        // let Login = this.pbRoot.lookupType("pb.Login");
        // let msg = Login.toObject({},{defaults:true});
        // msg.token = this.userToken;
        // let msg = Login.create(msg);
        // let buff = Login.encode(msg).finish();
    }
    //设置心跳定时器
    SetHeartbeatInterval(){
        this.heartbeatInterval = setInterval(this.CS_Heartbeat.bind(this),5000);
    }
    //接收消息，回调
    WsOnMessage(ev){
        this.Show("onMessage...");
        var ab = 0;
        var parent = this;
        if(this.envMode == "browser"){//浏览器
            this.Show("size:"+ev.data.size);
            var reader = new FileReader();
            reader.readAsArrayBuffer(ev.data);
            reader.onloadend = function(e) {
                var dataBuffer = new Uint8Array(reader.result);
                parent.Unpack(dataBuffer);
            }
        }else{//nodejs
            ab = new ArrayBuffer(ev.data.length);
            var dataBuffer = new Uint8Array(ab);
            for(let i =0;i<ev.data.length;i++){
                dataBuffer[i] = ev.data[i];
            }
            this.Unpack(dataBuffer);
        }
    }
    //解包
    Unpack(dataBuffer){
        // console.log("Unpack:",dataBuffer);
        //创建一个 msg object ， 是公共结构体
        let msgObj = this.CreatePbObj(this.pbPackage+"Msg");
        //数据长度
        var bytes4 = util.processBufferRange(dataBuffer,0,4);
        msgObj.dataLength = util.Byte4ToInt(bytes4);
        //传输内容类型
        var bytes1 = util.processBufferRange(dataBuffer,4,5);
        msgObj.contentType = util.Byte1ToInt(bytes1);
        //传输协议
        var bytes1 = util.processBufferRange(dataBuffer,5,6);
        msgObj.protocolType = util.Byte1ToInt(bytes1);
        //serviceId
        var bytes1 = util.processBufferRange(dataBuffer,6,7);
        msgObj.serviceId = util.Byte1ToInt(bytes1);
        //funcId
        var bytes2 = util.processBufferRange(dataBuffer,7,9);
        msgObj.funcId = util.Byte2ToInt(bytes2);
        //session
        var sessionBytes = util.processBufferRange(dataBuffer,9,19);
        msgObj.sessionId = util.processBufferString(sessionBytes,0);
        //sidFid
        msgObj.sidFid = msgObj.serviceId + "" + msgObj.funcId;
        //content
        var content = util.processBufferRange(dataBuffer,19,19+msgObj.dataLength);

        // console.log("dataBuffer.length:",dataBuffer.length,",content length:,",content.length);

        var actionMap = this.getActionById(msgObj.sidFid,"server");
        // console.log("pb."+actionMap.request,content);

        if( this.contentType != msgObj.contentType){
            this.Show("contentType != msgObj.contentType");
            return  1;
        }

        if( this.protocolType != msgObj.protocolType){
            this.Show("protocolType != msgObj.protocolType");
            return 1;
        }
        //解包 content 的具体内容，并映射成一个 object
        if( this.contentType == ContentType.JSON ){
            content = util.processBufferString(content,0);
            msgObj.content = JSON.parse(content);
        }else if( this.contentType == ContentType.PROTOBUF ) {
            let pbObj = this.pbRoot.lookupType("pb."+actionMap.request);
            msgObj.content = pbObj.decode(content);
        }else{
            this.Show("Unpack contentType err:"+this.contentType.toString());
        }

        this.ShowComplex("Unpack",msgObj);

        this.Router(msgObj);
    }
    //路由，目前仅处理 登陆成功 和 心跳 ，后续逻辑交给 调用者
    Router(msgObj){
        let row = this.getActionById(msgObj.sidFid,"server");
        console.log("Router func_name:",row.func_name , " , sidFid:",msgObj.sidFid,);
        switch (row.func_name){
            case "SC_Login":
                this.SC_Login(msgObj);
                break;
            case "SC_Heartbeat":
                this.SC_Heartbeat(msgObj);
                break;
            case "SC_Pong":
                this.SC_Pong(msgObj);
                break;
            default :
                this.Show("Router no need process.")
        }

        if(this.callbackMessage){
            this.callbackMessage(msgObj);
        }
        // eval( "this."+row.func_name+"(msgObj.content)" );
    }
    //发送心跳消息
    CS_Heartbeat(){
        this.Show("SetHeartbeat:");
        let HeartbeatObj = this.CreatePbObj(this.pbPackage+"Heartbeat");
        let longObj = protobufjs.util.Long.fromNumber(util.UnixStamp13());//1692007158489
        HeartbeatObj.clientReqTime = longObj;
        // console.log(HeartbeatObj);
        this.SendMsgById(90110,HeartbeatObj);//CS_Heartbeat
    }
    //接收心跳消息
    SC_Heartbeat(msgObj){
        this.ShowComplex("SC_Heartbeat:",msgObj);
    }
    //接收S响应消息
    SC_Pong(msgObj){
        this.ShowComplex("SC_Pong back:",msgObj);
        // console.log("in SC_Pong");
    }
    //接收登陆结果
    SC_Login(msgObj){
        if(msgObj.content.code != 200){
            this.Show("login failed ,err msg:"+msgObj.content.errMsg)
            return 1;
        }
        this.Show("login success~~~");
        this.CS_Ping();
        // this.SetHeartbeatInterval();
    }
    //发送心跳消息
    CS_Ping(){
        let PingReq = this.CreatePbObj("pb.PingReq");
        PingReq.requestId = "aaaaa";

        this.SendMsgById(90106,PingReq);//CS_Login
    }
    //连接的状态更新
    UpStatus(status){
        this.Show("up status ,  old status:" + this.status   +  "("+ Status.GetDesc()[this.status]+") , new status:"  + status + "("+  Status.GetDesc()[status] + ")");
        this.status = status;
    }
    //创建一个 protobuf 对象
    CreatePbObj(className){
        var obj = this.pbRoot.lookupType(className);
        return  obj.toObject({},{defaults:true});
    }
    //监听到连接关闭
    WsOnClose  (ev){
        this.Show("server onclose")
        this.UpStatus(Status.CLOSE);
        if (this.callbackClose){
            this.callbackClose();
        }
        // clearInterval(self.UserHeartbeatTimer)
        // clearInterval(self.RoomHeartbeatTimer)

        // clearInterval(self.pushLogicFrameLoopFunc);
        // self.upStatus(10);
        // // window.clearInterval(self.heartbeatLoopFunc);
        // if (self.myClose == 1){
        //     var reConnBntId = "reconn_"+self.playerId;
        //     var msg = "重连接";
        //     self.upOptBntHref(reConnBntId,msg,self.create);
        // }else{
        //     self.closeFlag = 2;
        //     self.upOptBnt("服务端关闭，游戏结束，连接断开",1)
        // }
    };
    //设置公共回调函数
    SetCallback(onOpen,onMessage,onClose,onError){
        this.callbackClose = onClose;
        this.callbackError = onError;
        this.callbackOpen = onOpen;
        this.callbackMessage = onMessage;
    }
    //获取完整的连接地址
    GetUrl(){
        // console.log("ppp:", this.gatewayConfig.wsPort)
        return  "ws://" + this.gatewayConfig.outIp + ":" + this.gatewayConfig.wsPort + this.gatewayConfig.wsUri;
    }
    //创建一个 WS 协议的连接对象
    CreateWsObj(){
        let wsObj = null;
        if ( typeof(window) == "undefined") {
            this.envMode = "nodejs";
            this.Show("this is not browser ,use nodejs WS lib");

            wsObj = new WsNode.WebSocket(this.GetUrl());
        }else{
            this.envMode = "browser";
            this.Show("this is browser,use native WS lib");
            if(!window.WebSocket || typeof WebSocket == 'undefined'){
                ThrowEx("当前浏览器不支持，无法使用");
            }

            wsObj = new WebSocket(this.GetUrl());
        }

        return wsObj;
    }
    //输出日志(字符串)
    Show(str,showNoticeMsg = 0){
        console.log(this.descPre + " " + str)
    }
    //输出日志(字符串+对象/数组)
    ShowComplex = function(str,complexType,showNoticeMsg = 0){
        console.log(this.descPre + " " + str ,complexType)
    }
    //抛出异常
    ThrowEx(str){
        throw str;
    }
    /*
        发送消息，自定义协议格式：
        1-4字节：当前包数据总长度，~可用于：TCP粘包的情况
        5字节：content type
        6字节：protocol type
        7字节 :服务Id
        8-9字节 :函数Id
        10-19：预留，还没想好，可以存sessionId，也可以换成UID
        19 以后为内容体
        结尾会添加一个字节：\f ,可用于 TCP 粘包 分隔
    */
    SendMsgById ( actionName,contentObj  ){
        var prefix = "<sendMsg> action: "+ actionName;
        // var actionInfo = this.getActionByName(actionName,"client");
        var actionInfo = this.getActionById(actionName,"client");
        // console.log(actionInfo);
        // return 1;
        if (!actionInfo){
            this.Show(prefix+"err:get action empty ");
            return false;
        }

        if(!contentObj){
            this.show(prefix+" err:contentObj empty.")
            return false;
        }

        var content = null;
        if( this.contentType == ContentType.JSON ){
            content = JSON.stringify(contentObj);
            content = util.stringToUint8Array(content);
            // console.log("json:",content);
        }else if( this.contentType == ContentType.PROTOBUF ) {
            let Login = this.pbRoot.lookupType(actionInfo.request);
            content = Login.encode(Login.create(contentObj)).finish();
        }else{
            this.Show("contentType err");
        }

        var serviceId = actionInfo.id.toString().substring(0,2);
        var funcId = actionInfo.id.toString().substring(2);
        var session = "1234567890";
        var contentLenByte = util.intToByte4( content.length);
        var contentTypeByte = util.intToOneByteArr(this.contentType);
        var protocolTypeByte = util.intToOneByteArr(this.protocolType);
        var serviceIdByte = util.intToOneByteArr(parseInt(serviceId));
        var funcIdByte = util.intToTwoByteArr(parseInt(funcId));
        var sessionByte = util.stringToUint8Array(session);
        var endStr = new Uint8Array(1);
        endStr[0] = "\f";

        var debugInfo =  prefix + " fullId: " + actionInfo.id + " serviceId: " + serviceId + " funcId: " + funcId + " contentType:"+ContentType.GetDesc()[this.contentType]+ " contentType:"+ProtobufType.GetDesc()[this.protocolType]  ;
        this.Show(debugInfo);

        let contentBytes =  util.concatenate(contentLenByte,contentTypeByte,protocolTypeByte,serviceIdByte,funcIdByte,sessionByte,content,endStr)  ;
        // console.log("start sending.....")
        this.wsObj.send(contentBytes);

    }
    //根据 id 获取 action map 一行
    getActionById(id,category){
        var data = this.actionMap[category];
        for(let key  in data){
            if (key == id){
                return data[key];
            }
        }
        this.Show("getActionById is empty, id:"+id + " category:"+category)
        return "";
    }
    //根据 name 获取 action map 一行
    getActionByName(name,category){
        var data = this.actionMap[category];
        for(let key  in data){
            if (data[key].func_name == name){
                return data[key];
            }
        }
        this.Show("getActionById is empty, name:"+name + " category:"+category)
        return "";
    }

}

class Status{
    static INIT = 1;
    static CONNECTED = 2;
    static LOGIN_SUCCESS = 3;
    static LOGIN_FAILED = 4;
    static RESUME = 5;
    static SIGN = 6;
    static SIGN_CANCEL = 7;
    static READ = 8;
    static GAME_START=9;
    static GAME_END = 10;
    static CLOSE = 11;

    static GetDesc(){
        let objList = new Object();
        objList[Status.INIT] = "初始化";
        objList[Status.CONNECTED] = "ws连接成功";
        objList[Status.LOGIN_SUCCESS] = "登陆成功";
        objList[Status.LOGIN_FAILED] = "登陆失败";
        objList[Status.RESUME] = "未结束游戏，恢复中";
        objList[Status.SIGN] = "报名匹配中";
        objList[Status.SIGN_CANCEL] = "取消匹配";
        objList[Status.READ] = "准备中";
        objList[Status.GAME_START] = "开始游戏中";
        objList[Status.GAME_END] = "游戏已结束";
        objList[Status.CLOSE] = "连接关闭了";

        return objList;
    }
}

class ContentType {
    static JSON = 1;
    static PROTOBUF = 2;
    static GetDesc(){
        let objList = new Object();
        objList[ContentType.JSON] = "json";
        objList[ContentType.PROTOBUF] = "protobuf";

        return objList;
    }
}
class ProtobufType{
    static TCP = 1;
    static WEBSOCKET = 2;
    static UDP = 3;
    static GetDesc(){
        let objList = new Object();
        objList[ProtobufType.TCP] = "TCP";
        objList[ProtobufType.WEBSOCKET] = "WEBSOCKET";
        objList[ProtobufType.UDP] = "UDP";

        return objList;
    }
}



export {Ws}