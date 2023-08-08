
import * as ApiLogic from "./apiLogic.js";
class Cicd {
  
    constructor(httpRequest) {
        this.Caller = null;
        this.HttpRequest = httpRequest
    }
    
    SetCaller(callerObj){
        this.Caller = callerObj;
    }
    //每台机器上，有多少个服务，具体可以操作部署哪个项目到远端服务器
    CicdLocalAllServerServiceList(data,callback,uriReplace){                             
        let uri = "/cicd/local/all/server/service/list";
        let method = "GET";
        
        if (uriReplace){//有些URI中，包含动态变量，这里做一下替换
            for(let key  in uriReplace){
                uri = uri.replace("{"+ key + "}",uriReplace[key]);
            }
        }
        
        //let loginData = ;
        this.Caller.callbackList[uri] = callback;
        this.HttpRequest.request(this.Caller.CommonCallback.bind(this.Caller),uri,this.Caller.token,false,method,data,uriReplace);
    }
    //查看 项目的已部署 日志 列表
    CicdPublishList(data,callback,uriReplace){                             
        let uri = "/cicd/publish/list";
        let method = "GET";
        
        if (uriReplace){//有些URI中，包含动态变量，这里做一下替换
            for(let key  in uriReplace){
                uri = uri.replace("{"+ key + "}",uriReplace[key]);
            }
        }
        
        //let loginData = ;
        this.Caller.callbackList[uri] = callback;
        this.HttpRequest.request(this.Caller.CommonCallback.bind(this.Caller),uri,this.Caller.token,false,method,data,uriReplace);
    }
    //属于基础数据，获取所有服务器列表，并做ping，确定状态
    CicdServerList(data,callback,uriReplace){                             
        let uri = "/cicd/server/list";
        let method = "GET";
        
        if (uriReplace){//有些URI中，包含动态变量，这里做一下替换
            for(let key  in uriReplace){
                uri = uri.replace("{"+ key + "}",uriReplace[key]);
            }
        }
        
        //let loginData = ;
        this.Caller.callbackList[uri] = callback;
        this.HttpRequest.request(this.Caller.CommonCallback.bind(this.Caller),uri,this.Caller.token,false,method,data,uriReplace);
    }
    //开始把项目部署到指定的服务器上，本机编译，最后再把代码同步到远端服务器上
    CicdServiceDeploy(data,callback,uriReplace){                             
        let uri = "/cicd/service/deploy";
        let method = "POST";
        
        if (uriReplace){//有些URI中，包含动态变量，这里做一下替换
            for(let key  in uriReplace){
                uri = uri.replace("{"+ key + "}",uriReplace[key]);
            }
        }
        
        //let loginData = ;
        this.Caller.callbackList[uri] = callback;
        this.HttpRequest.request(this.Caller.CommonCallback.bind(this.Caller),uri,this.Caller.token,false,method,data,uriReplace);
    }
    //属于基础数据，查看下 当前所有项目的状态
    CicdServiceList(data,callback,uriReplace){                             
        let uri = "/cicd/service/list";
        let method = "GET";
        
        if (uriReplace){//有些URI中，包含动态变量，这里做一下替换
            for(let key  in uriReplace){
                uri = uri.replace("{"+ key + "}",uriReplace[key]);
            }
        }
        
        //let loginData = ;
        this.Caller.callbackList[uri] = callback;
        this.HttpRequest.request(this.Caller.CommonCallback.bind(this.Caller),uri,this.Caller.token,false,method,data,uriReplace);
    }
    //已部署好的项目，正式 发布
    CicdServicePublish(data,callback,uriReplace){                             
        let uri = "/cicd/service/publish/{id}/{flag}";
        let method = "GET";
        
        if (uriReplace){//有些URI中，包含动态变量，这里做一下替换
            for(let key  in uriReplace){
                uri = uri.replace("{"+ key + "}",uriReplace[key]);
            }
        }
        
        //let loginData = ;
        this.Caller.callbackList[uri] = callback;
        this.HttpRequest.request(this.Caller.CommonCallback.bind(this.Caller),uri,this.Caller.token,false,method,data,uriReplace);
    }
    //每台机上都会有一个 superVisor 进程，管理着所有 服务/项目，从 superVisor 视角看一下所有 项目的状态
    CicdSuperVisorList(data,callback,uriReplace){                             
        let uri = "/cicd/superVisor/list";
        let method = "GET";
        
        if (uriReplace){//有些URI中，包含动态变量，这里做一下替换
            for(let key  in uriReplace){
                uri = uri.replace("{"+ key + "}",uriReplace[key]);
            }
        }
        
        //let loginData = ;
        this.Caller.callbackList[uri] = callback;
        this.HttpRequest.request(this.Caller.CommonCallback.bind(this.Caller),uri,this.Caller.token,false,method,data,uriReplace);
    }
    //对远端服务器上的 superVisor，管理一个服务，如：停止进程 重启进程 启动进程
    CicdSuperVisorProcess(data,callback,uriReplace){                             
        let uri = "/cicd/superVisor/process";
        let method = "POST";
        
        if (uriReplace){//有些URI中，包含动态变量，这里做一下替换
            for(let key  in uriReplace){
                uri = uri.replace("{"+ key + "}",uriReplace[key]);
            }
        }
        
        //let loginData = ;
        this.Caller.callbackList[uri] = callback;
        this.HttpRequest.request(this.Caller.CommonCallback.bind(this.Caller),uri,this.Caller.token,false,method,data,uriReplace);
    }
    
    
}
export {Cicd}