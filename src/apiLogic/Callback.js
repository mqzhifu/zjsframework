import * as Cfg from "./../config.js";
import * as HttpRequest from "./../httpRequest.js"

class Callback{
    constructor(header,encrypt,http) {
        this.token = "";//登陆成功后，保存 token
        this.callbackList= [];//保存调用者的：回调函数

        let config = new Cfg.Config(header,encrypt,http);
        this.HttpRequest = new HttpRequest.HttpRequest(config);
    }
    
    CommonCallback (uri,err,data){
        let prefix = "CommonCallback";
        console.log(prefix," uri:",uri)
        if(err){
            console.log(prefix," err:",err)
            this.ExecCall(uri,err,data)
            return 1;
        }

        if(!data){
            console.log(prefix," data empty.")
            this.ExecCall(uri,err,data)
            return 1;
        }

        if(data.code != 200){
            console.log(prefix,"request back err, code:"+data.code + " msg: "+ data.msg);
            this.ExecCall(uri,err,data)
            return 1;
        }

        // console.log(data);
        // return 1;
        if(uri == "/base/login"){
            console.log(prefix," set token.");
            this.token = data.data.token;
        }
        // let funcName = this.UriTurnFunName(uri);
        this.ExecCall(uri,err,data)
        return 1;
    }

    ExecCall(uri,err,data){
        if(!!(uri in this.callbackList)){
            this.callbackList[uri](uri,err,data);
        }else{
            console.log("err:uri not in list .",uri)
        }
    }
    
    //订阅什么事件就回调什么事件
    CallbackAgoraCloud(obj,callback){
        let uri = "/callback/agora/cloud";
        let method = "POST";
        //let loginData = {"eventType":0,"noticeId":"","notifyMs":0,"payload":{"cname":"","details":{"errorCode":0,"errorLevel":0,"errorMsg":"","exitStatus":0,"fileList":[{"fileName":"","isPlayable":false,"mixedAllUser":false,"sliceStartTime":0,"trackType":"","uid":""}],"leaveCode":0,"module":0,"msgName":"","stat":0,"status":0},"sendts":0,"sequence":0,"serviceScene":"","serviceType":0,"sid":"","uid":""},"productId":0};
        this.callbackList[uri] = callback;
        this.HttpRequest.request(this.CommonCallback.bind(this),uri,this.token,false,method,obj,"");
    }
    //订阅什么事件就回调什么事件
    CallbackAgoraRtc(obj,callback){
        let uri = "/callback/agora/rtc";
        let method = "POST";
        //let loginData = {"eventType":0,"noticeId":"","notifyMs":0,"payload":{"channelName":"","platform":0,"reason":0,"ts":0,"uid":0},"productId":0};
        this.callbackList[uri] = callback;
        this.HttpRequest.request(this.CommonCallback.bind(this),uri,this.token,false,method,obj,"");
    }
    
}
export {Callback}