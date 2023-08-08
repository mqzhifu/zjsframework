
import * as ApiLogic from "./apiLogic.js";
class ConfigCenter {
  
    constructor(httpRequest) {
        this.Caller = null;
        this.HttpRequest = httpRequest
    }
    
    SetCaller(callerObj){
        this.Caller = callerObj;
    }
    //
    ConfigCenterCreateModule(data,callback,uriReplace){                             
        let uri = "/config/center/create/module";
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
    //
    ConfigCenterGetKey(data,callback,uriReplace){                             
        let uri = "/config/center/get/key";
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
    //
    ConfigCenterGetModule(data,callback,uriReplace){                             
        let uri = "/config/center/get/module";
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
    //
    ConfigCenterModuleSetKey(data,callback,uriReplace){                             
        let uri = "/config/center/module/set/key";
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
export {ConfigCenter}