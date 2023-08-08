import H from "http"
import * as WsNode from "ws";
// var socket = new WebSocket('ws://localhost:3000');

class Ws{
    statusDesc = {
        1: "初始化",//
        2: "ws连接成功",//
        3: "登陆成功",//
        4: "登陆失败",//
        5: "未结束游戏，恢复中",
        6: "报名匹配中",//
        7: "取消匹配",//
        8: "准备中",//
        9: "开始游戏中",//
        10: "游戏已结束",//
        11: "连接关闭了",//
    };
    constructor(gatewayConfig,actionMap,gameMatchRule) {
        this.descPre = "ws ";
        this.status = 1;
        this.gatewayConfig = gatewayConfig;
        // console.log("GatewayConfig:::",GatewayConfig)
        this.actionMap = actionMap;
        this.gameMatchRule = gameMatchRule;

        this.wsObj = null;
        // console.log("ws constructor");
        this.protocolType  = 1;
        this.contentType = 1;
        this.logicFrameLoopTimeMs = 0;
    }

    //创建ws长连接，也算是入口函数，得选建立WS连接，才有后续的所有操作
    Start (){
        this.Show("创建 ws 连接");
        if (this.status != 1 && this.status != 11){
            return this.Show("status错误， status  !=  init or close",1)
        }
        // var parent = this
        this.closeFlag = 0;//清空 关闭标识
        //根据帧数，计算出 秒数
        this.logicFrameLoopTimeMs = parseInt( 1000 / this.gameMatchRule.fps);
        // console.log("this.logicFrameLoopTimeMs :",this.logicFrameLoopTimeMs );

        this.Show("create new WebSocket url:"+this.GetUrl() +" FPS:" +this.gameMatchRule.fps + " ms:" + this.logicFrameLoopTimeMs +" contentType:" + this.contentType+" protocolType:" + this.protocolType)
        //创建ws连接
        this.wsObj = this.CreateWsObj();
        //设置 连接建立成功回调
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
        this.Show("up status ,  old status:" + this.status   +  "("+ this.statusDesc[this.status]+") , new status:"  + status + "("+ this.statusDesc[status] + ")");
        this.status = status;
    }
    WsOnOpen(){
        console.log("onOpen : ws connect server : Success  ");
        this.UpStatus(2);
        // var requestLoginObj = new proto.pb.Login();
        // requestLoginObj.setToken(self.token) ;
        // this.sendMsg("CS_Login",requestLoginObj);
    }
    WsOnClose  (ev){
        this.Show("server onclose")
        clearInterval(self.UserHeartbeatTimer)
        clearInterval(self.RoomHeartbeatTimer)

        // alert("receive server close:" +ev.code);
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

    GetUrl(){
        // console.log("ppp:", this.gatewayConfig.wsPort)
        return  "ws://" + this.gatewayConfig.outIp + ":" + this.gatewayConfig.wsPort + this.gatewayConfig.wsUri;
    }

    CreateWsObj(){

        let wsObj = null;
        if ( typeof(window) == "undefined") {
            this.Show("this is not browser");
            wsObj = new WsNode.WebSocket(this.GetUrl());
        }else{
            if(!window.WebSocket){
                ThrowEx("当前浏览器不支持，无法使用");
            }

            this.Show("this is browser" ,window)

            wsObj = new WebSocket(this.GetUrl());
        }

        return wsObj;
    }
    Show(str,showNoticeMsg = 0){
        console.log(this.descPre + " " + str)
        // if (showNoticeMsg){
        //     this.noticeMsg(str);
        // }
    }

    ShowComplex = function(str,complexType,showNoticeMsg = 0){
        console.log(this.descPre + " " + str ,complexType)
        // if (showNoticeMsg){
        //     this.noticeMsg(str);
        // }
    }

    ThrowEx(str){
        throw str;
    }


}

export {Ws}