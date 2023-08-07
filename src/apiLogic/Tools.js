import * as Cfg from "./../config.js";
import * as HttpRequest from "./../httpRequest.js"

class Tools{
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
    
    //用于开发工具测试
    ToolsProjectInfo(obj,callback){
        let uri = "/tools/project/info/{id}";
        let method = "GET";
        //let loginData = {"id":""};
        this.callbackList[uri] = callback;
        this.HttpRequest.request(this.CommonCallback.bind(this),uri,this.token,false,method,obj,"");
    }
    //120项目API接口aaa
    ToolsTestMiguApiBackdata(obj,callback){
        let uri = "/tools/test/migu/api/backdata";
        let method = "POST";
        //let loginData = {"captcha":"","captchaId":"","receiver":"","replace_var":{"a":"bbbb"},"rule_id":0,"send_ip":"","send_uid":0};
        this.callbackList[uri] = callback;
        this.HttpRequest.request(this.CommonCallback.bind(this),uri,this.token,false,method,obj,"");
    }
    
}
export {Tools}