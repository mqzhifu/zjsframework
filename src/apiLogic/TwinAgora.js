
import * as ApiLogic from "./apiLogic.js";
class TwinAgora {
  
    constructor(httpRequest) {
        this.Caller = null;
        this.HttpRequest = httpRequest
    }
    
    SetCaller(callerObj){
        this.Caller = callerObj;
    }
    //当有未停止的云端录制时，自动stop掉
    TwinAgoraCloudRecordCheck(data,callback,uriReplace){                             
        let uri = "/twin/agora/cloud/record/check";
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
    //录屏时，要先从声网，申请一个资源ID，之后，才能开始（声网限制：每秒最多请求10次）
    TwinAgoraCloudRecordCreateAcquire(data,callback,uriReplace){                             
        let uri = "/twin/agora/cloud/record/create/acquire";
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
    //获取用户的录屏记录列表
    TwinAgoraCloudRecordList(data,callback,uriReplace){                             
        let uri = "/twin/agora/cloud/record/list";
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
    //将小文件，合并成一个大文件
    TwinAgoraCloudRecordOssFiles(data,callback,uriReplace){                             
        let uri = "/twin/agora/cloud/record/oss/files/{rid}";
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
    //根据上一步获取到的ResourceId，
    TwinAgoraCloudRecordQuery(data,callback,uriReplace){                             
        let uri = "/twin/agora/cloud/record/query/{rid}";
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
    //根据上一步获取到的ResourceId，开始录屏，其数据会推送到3方的OSS上
    TwinAgoraCloudRecordStart(data,callback,uriReplace){                             
        let uri = "/twin/agora/cloud/record/start";
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
    //各种异常情况都最好调一下stop，不然OSS要一直花钱呐....~~~~~
    TwinAgoraCloudRecordStop(data,callback,uriReplace){                             
        let uri = "/twin/agora/cloud/record/stop/{rid}/{type}";
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
    //主要是超时时间的配置，C端需要使用
    TwinAgoraConfig(data,callback,uriReplace){                             
        let uri = "/twin/agora/config";
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
    //使用RTC前，动态获取token，然后再登陆声网，才可正常使用声网的功能(token时效是一天，如果存在且未失效正常返回，否则创建新的)
    TwinAgoraRtcGetToken(data,callback,uriReplace){                             
        let uri = "/twin/agora/rtc/get/token";
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
    //使用RTM前，动态获取token，然后再登陆声网，才可正常使用声网的功能(token时效是一天，如果存在且未失效正常返回，否则创建新的)
    TwinAgoraRtmGetToken(data,callback,uriReplace){                             
        let uri = "/twin/agora/rtm/get/token";
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
    //如：房间、用户连接状态等
    TwinAgoraSocketTools(data,callback,uriReplace){                             
        let uri = "/twin/agora/socket/tools";
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
    //如：发送标注图次数、发送图片次数、发送视频次数
    TwinAgoraStatisticsEventAlls(data,callback,uriReplace){                             
        let uri = "/twin/agora/statistics/event/alls";
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
    
    
}
export {TwinAgora}