import * as Cfg from "./../config.js";
import * as HttpRequest from "./../httpRequest.js"

class GameMatch{
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
    
    //RULE是后台录入的，一次匹配的大部分的配置信息
    GameMatchRule(obj,callback){
        let uri = "/game/match/rule/{id}";
        let method = "GET";
        //let loginData = {"id":""};
        this.callbackList[uri] = callback;
        this.HttpRequest.request(this.CommonCallback.bind(this),uri,this.token,false,method,obj,"");
    }
    //报名是以（组）为单位的，而校验是以 player 为单位的
    GameMatchSign(obj,callback){
        let uri = "/game/match/sign";
        let method = "POST";
        //let loginData = {"addition":"","group_id":0,"player_sets":[{"uid":0,"weight_attr":{"a":"bbbb"}}],"rule_id":0,"source_uid":0};
        this.callbackList[uri] = callback;
        this.HttpRequest.request(this.CommonCallback.bind(this),uri,this.token,false,method,obj,"");
    }
    //删除已参与匹配的玩家信息，以组为单位，如果组里是多个人，其中一个人取消，组里其它的玩家一并都得跟着取消
    GameMatchSignCancel(obj,callback){
        let uri = "/game/match/sign/cancel";
        let method = "GET";
        //let loginData = {"group_id":0,"rule_id":0,"source_uid":0};
        this.callbackList[uri] = callback;
        this.HttpRequest.request(this.CommonCallback.bind(this),uri,this.token,false,method,obj,"");
    }
    
}
export {GameMatch}