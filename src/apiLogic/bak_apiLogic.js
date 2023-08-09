import * as Cfg from "./../config.js";
import * as HttpRequest   from "./../httpRequest.js"

class ApiLogic{
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
            console.log(prefix," set token.", data.data.token);
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

    // BaseLogin(obj,callback){
    //     // let loginData = {'username':username,"password":ps};
    //     let uri = "/base/login";
    //     let method = "POST";
    //     this.callbackList[uri] = callback;
    //     this.HttpRequest.request(this.CommonCallback.bind(this),uri,this.token,false,method,obj,"");
    // }
    // GatewayConfig(obj,callback){
    //     let uri = "/gateway/config";
    //     let method = "GET";
    //     this.callbackList[uri] = callback;
    //     this.HttpRequest.request(this.CommonCallback.bind(this),uri,this.token,false,method,"","",this);
    // }
    // GatewayActionMap(obj,callback){
    //     let uri = "/gateway/action/map";
    //     let method = "GET";
    //     this.callbackList[uri] = callback;
    //     this.HttpRequest.request(this.CommonCallback.bind(this),uri,this.token,false,method,"","",this);
    // }
    // GatewayFdList(obj,callback){
    //     let uri = "/gateway/fd/list";
    //     let method = "GET";
    //     this.callbackList[uri] = callback;
    //     this.HttpRequest.request(this.CommonCallback.bind(this),uri,this.token,false,method,"","",this);
    //
    // }
    // GatewaySendMsg(obj,callback){
    //     let uri = "/gateway/send/msg";
    //     let method = "GET";
    //     this.HttpRequest.request(callback,uri,this.token,false,method,"","",this);
    //
    //     // /gateway/total
    // }
    // GatewayTotal(obj,callback){
    //     let uri = "/gateway/total";
    //     let method = "GET";
    //     this.callbackList[uri] = callback;
    //     this.HttpRequest.request(this.CommonCallback.bind(this),uri,this.token,false,method,"","",this);
    // }

}

export {ApiLogic}