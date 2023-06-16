import * as Cfg from "./config.js";
import * as HttpRequest   from "./httpRequest.js"

class ApiLogic{
    token = "";
    back = null;
    constructor(header,encrypt,http) {
        this.token = "";

        let config = new Cfg.Config(header,encrypt,http);
        let hr = new HttpRequest.HttpRequest(config);
        this.HttpRequest = hr;
    }

    UserLogin(username ,ps ,callback){
        try{
            // let userInfo = {'username':"frame_sync_1","password":"123456"};
            let loginData = {'username':username,"password":ps};
            let uri = "/base/login";
            let method = "POST";
            this.back = callback;
            this.HttpRequest.request(this.UserLoginCallback,uri,"",false,method,loginData,"",this);
        }catch (e){
            console.log("exception :",e)
        }
    }

    UserLoginCallback(data,parentObj){
        console.log('userCallback , uid:',data.user.id, " token:"+data.token);
        // console.log(parentObj)
        parentObj.token = data.token;
        parentObj.back(data);
    }
    GatewayConfig(callback){
        let uri = "/gateway/config";
        let method = "GET";
        this.HttpRequest.request(callback,uri,this.token,false,method,"","",this);
    }
    GatewayActionMap(callback){
        let uri = "/gateway/action/map";
        let method = "GET";
        this.HttpRequest.request(callback,uri,this.token,false,method,"","",this);
    }
    GatewayFdList(callback){
        let uri = "/gateway/fd/list";
        let method = "GET";
        this.HttpRequest.request(callback,uri,this.token,false,method,"","",this);

    }
    GatewaySendMsg(callback){
        let uri = "/gateway/send/msg";
        let method = "GET";
        this.HttpRequest.request(callback,uri,this.token,false,method,"","",this);

        // /gateway/total
    }
    GatewayTotal(callback){
        let uri = "/gateway/total";
        let method = "GET";
        this.HttpRequest.request(callback,uri,this.token,false,method,"","",this);
    }

}

export {ApiLogic}