import * as Cfg from "./../config.js";
import * as HttpRequest from "./../httpRequest.js"

class Mail{
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
    
    //注意参数
    MailInfo(obj,callback){
        let uri = "/mail/info";
        let method = "POST";
        //let loginData = {"auto_receiver_del":0,"auto_receiver_read":0,"id":0};
        this.callbackList[uri] = callback;
        this.HttpRequest.request(this.CommonCallback.bind(this),uri,this.token,false,method,obj,"");
    }
    //注意参数
    MailList(obj,callback){
        let uri = "/mail/list";
        let method = "POST";
        //let loginData = {"box_type":0,"expire":0,"page":0,"pageSize":0,"receiver_del":0,"receiver_read":0};
        this.callbackList[uri] = callback;
        this.HttpRequest.request(this.CommonCallback.bind(this),uri,this.token,false,method,obj,"");
    }
    //注意参数
    MailSend(obj,callback){
        let uri = "/mail/send";
        let method = "POST";
        //let loginData = {"receiver":"","replaceVar":{"a":"bbbb"},"rule_id":0,"send_ip":"","send_time":0,"send_uid":0};
        this.callbackList[uri] = callback;
        this.HttpRequest.request(this.CommonCallback.bind(this),uri,this.token,false,method,obj,"");
    }
    
}
export {Mail}