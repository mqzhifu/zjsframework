import H from "http"
import * as WsNode from "ws";
import protobufjs from 'protobufjs'
// import * as pbJson from "./protobuf/proto/pb.json" assert { type: 'json' }
// import * as pbJson from "./protobuf/proto/pb.js"
// import * as pbJson from "./protobuf/proto/common.json" assert { type: 'json' }
class Ws{
    constructor(gatewayConfig,actionMap,gameMatchRule) {
        // Status.GetDesc();
        // let s = new Status();
        // s.GetDesc();
        // return 1;
        this.pbRoot = protobufjs.loadSync("./protobuf/proto/gateway.proto");

        this.descPre = "ws ";//日志输出公共前缀
        this.status = 1;//初始化连接状态
        this.gatewayConfig = gatewayConfig;//网关配置信息
        // console.log("GatewayConfig:::",GatewayConfig)
        this.actionMap = actionMap;//消息的ID映射
        this.gameMatchRule = gameMatchRule;//游戏匹配的配置信息

        this.wsObj = null;//WS连接的对象
        // console.log("ws constructor");
        this.protocolType  = 1;//数据传输的协议类型
        this.contentType = 1;//数据传输的内容类型
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
    WsOnMessage(data){

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

        let ss = Login.create();

        // pb.Login;
        console.log("===============================================================",Login.toJSON());
        // Login.create({"token":this.token})
        // var requestLoginObj = new proto.pb.Login();
        // requestLoginObj.setToken(self.token) ;
        // this.sendMsg("CS_Login",requestLoginObj);
    }
    SendMsg(){
        if(this.contentType == ContentType.JSON){

        }else{

        }
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