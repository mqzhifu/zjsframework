import * as Cfg from "./../config.js";
import * as HttpRequest from "./../httpRequest.js"

class Cicd{
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
    
    //开始把项目部署到指定的服务器上，本机编译，最后再把代码同步到远端服务器上
    CicdServiceDeploy(obj,callback){
        let uri = "/cicd/service/deploy";
        let method = "POST";
        //let loginData = {"flag":0,"server_id":0,"service_id":0};
        this.callbackList[uri] = callback;
        this.HttpRequest.request(this.CommonCallback.bind(this),uri,this.token,false,method,obj,"");
    }
    //已部署好的项目，正式 发布
    CicdServicePublish(obj,callback){
        let uri = "/cicd/service/publish/{id}/{flag}";
        let method = "GET";
        //let loginData = {"id":""};
        this.callbackList[uri] = callback;
        this.HttpRequest.request(this.CommonCallback.bind(this),uri,this.token,false,method,obj,"");
    }
    //对远端服务器上的 superVisor，管理一个服务，如：停止进程 重启进程 启动进程
    CicdSuperVisorProcess(obj,callback){
        let uri = "/cicd/superVisor/process";
        let method = "POST";
        //let loginData = {"flag":0,"server_id":0,"service_id":0};
        this.callbackList[uri] = callback;
        this.HttpRequest.request(this.CommonCallback.bind(this),uri,this.token,false,method,obj,"");
    }
    
}
export {Cicd}