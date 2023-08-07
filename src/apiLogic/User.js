import * as Cfg from "./../config.js";
import * as HttpRequest from "./../httpRequest.js"

class User{
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
    
    //欧美国家要求比较严，必须得有这功能，国内现在也有但不多，目前是用来方便开发/测试的，像脚本做自动化测试生成的用户(需要删除)，以及测试员线上测试时产生的用户数据需要删除（危险甚用）
    UserDelete(obj,callback){
        let uri = "/user/delete";
        let method = "DELETE";
        //let loginData = {"uids":""};
        this.callbackList[uri] = callback;
        this.HttpRequest.request(this.CommonCallback.bind(this),uri,this.token,false,method,obj,"");
    }
    //
    UserList(obj,callback){
        let uri = "/user/list";
        let method = "POST";
        //let loginData = {"page":0,"pageSize":0};
        this.callbackList[uri] = callback;
        this.HttpRequest.request(this.CommonCallback.bind(this),uri,this.token,false,method,obj,"");
    }
    //
    UserSetEmail(obj,callback){
        let uri = "/user/set/email";
        let method = "PUT";
        //let loginData = {"email":"","project_id":0,"rule_id":0,"sms_auth_code":""};
        this.callbackList[uri] = callback;
        this.HttpRequest.request(this.CommonCallback.bind(this),uri,this.token,false,method,obj,"");
    }
    //""
    UserSetInfo(obj,callback){
        let uri = "/user/set/info";
        let method = "POST";
        //let loginData = {"birthday":0,"headerImg":"","nickName":"","sex":0};
        this.callbackList[uri] = callback;
        this.HttpRequest.request(this.CommonCallback.bind(this),uri,this.token,false,method,obj,"");
    }
    //
    UserSetMobile(obj,callback){
        let uri = "/user/set/mobile";
        let method = "PUT";
        //let loginData = {"mobile":"","project_id":0,"rule_id":0,"sms_auth_code":""};
        this.callbackList[uri] = callback;
        this.HttpRequest.request(this.CommonCallback.bind(this),uri,this.token,false,method,obj,"");
    }
    //首次设置 与 修改两个动作可以合成一个，因为没有唯一性验证
    UserSetPassword(obj,callback){
        let uri = "/user/set/password";
        let method = "PUT";
        //let loginData = {"new_password_confirm":"","newPassword":"","password":""};
        this.callbackList[uri] = callback;
        this.HttpRequest.request(this.CommonCallback.bind(this),uri,this.token,false,method,obj,"");
    }
    
}
export {User}