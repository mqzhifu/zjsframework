import * as WsNode from "ws";
import protobufjs from 'protobufjs'
import * as util from  "./util.js"
// import  {fs} from "fs"
// import * as pbJson from "./protobuf/proto/pb.json" assert { type: 'json' }
// import * as pbJson from "./protobuf/proto/pb.js"
// import * as pbJson from "./protobuf/proto/common.json" assert { type: 'json' }





class Ws{
    constructor(gatewayConfig,actionMap,gameMatchRule,userToken) {
        // Status.GetDesc();
        // let s = new Status();
        // s.GetDesc();
        // return 1;
        this.userToken = userToken;
        this.pbRoot = protobufjs.loadSync("./protobuf/proto/gateway.proto");

        this.descPre = "ws ";//日志输出公共前缀
        this.status = 1;//初始化连接状态
        this.gatewayConfig = gatewayConfig;//网关配置信息
        // console.log("GatewayConfig:::",GatewayConfig)
        this.actionMap = actionMap;//消息的ID映射
        this.gameMatchRule = gameMatchRule;//游戏匹配的配置信息

        this.wsObj = null;//WS连接的对象
        // console.log("ws constructor");
        this.protocolType  = ProtobufType.WEBSOCKET;//数据传输的协议类型
        this.contentType = ContentType.PROTOBUF;//数据传输的内容类型
        this.logicFrameLoopTimeMs = 0;//每秒多少帧

        this.callbackClose = null;
        this.callbackOpen = null;
        this.callbackMessage = null;
        this.callbackError = null;

    }

    InitProto(){
        // console.log(pbJson);
        // let json = require("./protobuf/proto/pb.json")
        // let root = protobufjs.Root.fromJSON(pbJson)
        // let msg = root.lookupType("pb.Heartbeat");
        // console.log(Heartbeat);
    }
    //创建ws长连接，也算是入口函数，得选建立WS连接，才有后续的所有操作
    Start (){
        // this.InitProto();
        // return 1;
        this.Show("开始创建 ws 连接");
        if (this.status != 1 && this.status != 11){
            return this.Show("ws status 错误， status  !=  init or close",1)
        }
        // var parent = this
        // this.closeFlag = 0;//清空 关闭标识
        //根据帧数，计算出 秒数
        this.logicFrameLoopTimeMs = parseInt( 1000 / this.gameMatchRule.fps);
        // console.log("this.logicFrameLoopTimeMs :",this.logicFrameLoopTimeMs );

        this.Show("create new WebSocket url:"+this.GetUrl() +" FPS:" +this.gameMatchRule.fps + " ms:" + this.logicFrameLoopTimeMs +" contentType:" + this.contentType+" protocolType:" + this.protocolType)
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
    WsOnMessage(ev){
        // fs.readAsArrayBuffer(ev.data);


        var reader = new FileReader();
        reader.readAsArrayBuffer(ev.data);
        reader.onloadend = function(e) {



            // var dataBuffer = new Uint8Array(reader.result);
            // //首字母转大写
            // var actionLow = msgObj.action.substring(0, 1).toUpperCase() + msgObj.action.substring(1)
            // //拼接成最终classname
            // var className =  "proto.pb.Response" + actionLow;
            // var responseProtoClass = eval(className);
            // //将进制流转换成对象
            // msgObj.content =  responseProtoClass.deserializeBinary(content).toObject();


            var dataBuffer = new Uint8Array(reader.result);

            // debugInfo += "  dataBufferLength:"+dataBuffer.length+" contentType: protobuf ";

            var bytes4 = processBufferRange(dataBuffer,0,4);
            msgObj.dataLength = Byte4ToInt(bytes4);
            var bytes1 = processBufferRange(dataBuffer,4,5);
            msgObj.contentType = Byte1ToInt(bytes1);
            var bytes1 = processBufferRange(dataBuffer,5,6);
            msgObj.protocolType = Byte1ToInt(bytes1);
            var bytes1 = processBufferRange(dataBuffer,6,7);
            msgObj.serviceId = Byte1ToInt(bytes1);
            var bytes2 = processBufferRange(dataBuffer,7,9);
            msgObj.funcId = Byte2ToInt(bytes2);
            var sessionBytes = processBufferRange(dataBuffer,9,19);
            msgObj.sessionId = processBufferString(sessionBytes,0);
            msgObj.sidFid = msgObj.serviceId + "" + msgObj.funcId;
            var content = processBufferRange(dataBuffer,19,19+msgObj.dataLength);

            var actionMap = parent.getActionById(msgObj.sidFid,"server")
            // var className =  "proto.pb." + actionMap.request;
            // var RequestClass = eval( className);

            // debugInfo += " msg.dataLength: "+ msgObj.dataLength + " msg.contentType: " + msgObj.contentType + " msg.protocolType: "+msgObj.protocolType + " serviceId: " + msgObj.serviceId + " funcId:" +  msgObj.funcId +" ";
            // debugInfo += "service_name: "+ actionMap.service_name + " func_name:" + actionMap.func_name + " className:"+className;
            // parent.show(debugInfo);


            // var aa = proto.pb.EnterBattle()
            // aa.getPlayer
            //
            // int32   code        = 1;
            // string  errMsg      = 2;
            // int32   uid         = 3;

            let LoginRes = this.pbRoot.lookupType("pb.LoginRes");
            let message = LoginRes.create({code:0,errMsg:"",uid:0});
            var messageObj = LoginRes.decode(message);
            console.log(messageObj);
            // content = RequestClass.deserializeBinary(content);
            // // console.log("=====content:",content);
            // content = content.toObject()
            // // console.log("content: " ,content)
            // msgObj.content = content
            // parent.router(msgObj);
        };
    }
    UpStatus(status){
        console.log("status:",status)
        // console.log(Status.GetDesc()[2]);
        // return 1;
        this.Show("up status ,  old status:" + this.status   +  "("+ Status.GetDesc()[this.status]+") , new status:"  + status + "("+  Status.GetDesc()[status] + ")");
        this.status = status;
    }
    WsOnOpen(){
        console.log("onOpen : ws connect server : Success  ");
        this.UpStatus(Status.CONNECTED);
        if (this.callbackOpen){
            this.callbackOpen();
        }
        let Login = this.pbRoot.lookupType("pb.Login");
        let msg = Login.create({"token":this.userToken})

        const buffer = Login.encode(msg).finish();

        this.SendMsg("CS_Login",buffer)
        // this.wsObj.send(buffer);
        // console.log(this.pbRoot.toJSON("pb.Login"))
        // let aa = Login.toObject({})
        // let ss = Login.create();
        // ss.SourceUid = 1;

        // let aa = new comm.Heartbeat();
        // let a = this.pbRoot.get("Login")

        // console.log(Login.sourceUid);
        // console.log(Login.toObject({},{"default":true}))
        // console.log(Login.toJSON());
        // pb.Login;
        // console.log("===============================================================",Login.toJSON());
        // Login.create({"token":this.token})
        // var requestLoginObj = new proto.pb.Login();
        // requestLoginObj.setToken(self.token) ;
        // this.sendMsg("CS_Login",requestLoginObj);
    }
    WsOnClose  (ev){
        this.Show("server onclose")
        this.UpStatus(Status.CLOSE);
        // if (this.callbackClose){
        //     this.callbackClose();
        // }

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
            this.Show("this is not browser ,use nodejs WS lib");
            wsObj = new WsNode.WebSocket(this.GetUrl());
        }else{
            if(!window.WebSocket || typeof WebSocket == 'undefined'){
                ThrowEx("当前浏览器不支持，无法使用");
            }

            this.Show("this is browser" ,window)
            wsObj = new WebSocket(this.GetUrl());
        }

        return wsObj;
    }
    //输出日志(字符串)
    Show(str,showNoticeMsg = 0){
        console.log(this.descPre + " " + str)
        // if (showNoticeMsg){
        //     this.noticeMsg(str);
        // }
    }
    //输出日志(字符串+对象/数组)
    ShowComplex = function(str,complexType,showNoticeMsg = 0){
        console.log(this.descPre + " " + str ,complexType)
        // if (showNoticeMsg){
        //     this.noticeMsg(str);
        // }
    }
    //抛出异常
    ThrowEx(str){
        throw str;

    }

    SendMsg =  function ( action,contentObj  ){
        var prefix = " <sendMsg> action: "+ action;
        var id = this.getActionId(action,"client");
        if (!id){
            this.show(prefix+"err:get action empty ");
            return false;
        }
        if(!contentObj){
            this.show(prefix+" err:contentObj empty.")
            return false;
        }

        var content = null;

        //解析C端发送的数据，这一层，对于用户层的content数据不做处理
        //1-4字节：当前包数据总长度，~可用于：TCP粘包的情况
        //5字节：content type
        //6字节：protocol type
        //7字节 :服务Id
        //8-9字节 :函数Id
        //10-19：预留，还没想好，可以存sessionId，也可以换成UID
        //19 以后为内容体
        //结尾会添加一个字节：\f ,可用于 TCP 粘包 分隔

        var content = content = contentObj;

        var serviceId = id.toString().substring(0,2);
        var funcId = id.toString().substring(2);
        var session = "1234567890";
        var debugInfo =  prefix + " fullId: " + id + " serviceId: " + serviceId + " funcId: " + funcId + " contentType:"+ContentType.GetDesc()[this.contentType]  ;

        var contentLenByte = util.intToByte4( content.length);

        var contentTypeByte = util.intToOneByteArr(this.contentType);
        var protocolTypeByte = util.intToOneByteArr(this.protocolType);
        var serviceIdByte = util.intToOneByteArr(parseInt(serviceId));
        var funcIdByte = util.intToTwoByteArr(parseInt(funcId));
        var sessionByte = util.stringToUint8Array(session);
        // var contentByte = stringToUint8Array(content);

        var endStr = new Uint8Array(1);
        endStr[0] = "\f";
        content =  util.concatenate(contentLenByte,contentTypeByte,protocolTypeByte,serviceIdByte,funcIdByte,sessionByte,content,endStr)  ;


        // this.showComplex("<sendMsg final>" + debugLog + " " , content);

        this.wsObj.send(content);

    }

    getActionId = function (action,category){
        // console.log(this.actionMap);
        var data = this.actionMap[category];
        for(let key  in data){
            if (data[key].func_name == action){
                return data[key].id;
            }
        }
        this.show("getActionId is empty, action:"+action + " category:"+category)
        return "";
    };


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
        objList[ProtobufType.JSON] = "json";
        objList[ProtobufType.PROTOBUF] = "protobuf";

        return objList;
    }
}
class ProtobufType{
    static TCP = 1;
    static WEBSOCKET = 2;
    static UDP = 3;
    static GetDesc(){
        let objList = new Object();
        objList[ContentType.TCP] = "TCP";
        objList[ContentType.WEBSOCKET] = "WEBSOCKET";
        objList[ContentType.UDP] = "UDP";

        return objList;
    }
}



export {Ws}