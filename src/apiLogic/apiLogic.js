import * as Cfg from "./../config.js";
import * as HttpRequest   from "./../httpRequest.js"

import * as ApiLogicBase   from "./Base.js";
import * as ApiLogicCallback   from "./Callback.js";
import * as ApiLogicCicd   from "./Cicd.js";
import * as ApiLogicConfigCenter   from "./ConfigCenter.js";
import * as ApiLogicFile   from "./File.js";
import * as ApiLogicFrameSync   from "./FrameSync.js";
import * as ApiLogicGameMatch   from "./GameMatch.js";
import * as ApiLogicGateway   from "./Gateway.js";
import * as ApiLogicGoods   from "./Goods.js";
import * as ApiLogicMail   from "./Mail.js";
import * as ApiLogicSystem   from "./System.js";
import * as ApiLogicOrders   from "./Orders.js";
import * as ApiLogicPersistence   from "./Persistence.js";
import * as ApiLogicTools   from "./Tools.js";
import * as ApiLogicTwinAgora   from "./TwinAgora.js";
import * as ApiLogicUser   from "./User.js";

class ApiLogic{
    constructor(header,encrypt,http) {
        this.token = "";//登陆成功后，保存 token
        this.callbackList= [];//保存调用者的：回调函数

        let config = new Cfg.Config(header,encrypt,http);
        this.HttpRequest = new HttpRequest.HttpRequest(config);


        this.apiLogicBase  = new  ApiLogicBase.Base(this.HttpRequest)
        this.apiLogicCallback  = new  ApiLogicCallback.Callback(this.HttpRequest)
        this.apiLogicCicd  = new  ApiLogicCicd.Cicd(this.HttpRequest)
        this.apiLogicConfigCenter  = new  ApiLogicConfigCenter.ConfigCenter(this.HttpRequest)
        this.apiLogicFile  = new  ApiLogicFile.File(this.HttpRequest)
        this.apiLogicFrameSync  = new  ApiLogicFrameSync.FrameSync(this.HttpRequest)
        this.apiLogicGameMatch  = new  ApiLogicGameMatch.GameMatch(this.HttpRequest)
        this.apiLogicGateway  = new  ApiLogicGateway.Gateway(this.HttpRequest)
        this.apiLogicGoods  = new  ApiLogicGoods.Goods(this.HttpRequest)
        this.apiLogicMail  = new  ApiLogicMail.Mail(this.HttpRequest)
        this.apiLogicSystem  = new  ApiLogicSystem.System(this.HttpRequest)
        this.apiLogicOrders  = new  ApiLogicOrders.Orders(this.HttpRequest)
        this.apiLogicPersistence  = new  ApiLogicPersistence.Persistence(this.HttpRequest)
        this.apiLogicTools  = new  ApiLogicTools.Tools(this.HttpRequest)
        this.apiLogicTwinAgora  = new  ApiLogicTwinAgora.TwinAgora(this.HttpRequest)
        this.apiLogicUser  = new  ApiLogicUser.User(this.HttpRequest)

        this.apiLogicBase.SetCaller(this);
        this.apiLogicCallback.SetCaller(this);
        this.apiLogicCicd.SetCaller(this);
        this.apiLogicConfigCenter.SetCaller(this);
        this.apiLogicFile.SetCaller(this);
        this.apiLogicFrameSync.SetCaller(this);
        this.apiLogicGameMatch.SetCaller(this);
        this.apiLogicGateway.SetCaller(this);
        this.apiLogicGoods.SetCaller(this);
        this.apiLogicMail.SetCaller(this);
        this.apiLogicSystem.SetCaller(this);
        this.apiLogicOrders.SetCaller(this);
        this.apiLogicPersistence.SetCaller(this);
        this.apiLogicTools.SetCaller(this);
        this.apiLogicTwinAgora.SetCaller(this);
        this.apiLogicUser.SetCaller(this);
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