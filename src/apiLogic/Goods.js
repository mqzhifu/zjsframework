
import * as ApiLogic from "./apiLogic.js";
class Goods {
  
    constructor(httpRequest) {
        this.Caller = null;
        this.HttpRequest = httpRequest
    }
    
    SetCaller(callerObj){
        this.Caller = callerObj;
    }
    //创建一个商品
    GoodsCreateOne(data,callback,uriReplace){                             
        let uri = "/goods/create/one";
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
export {Goods}