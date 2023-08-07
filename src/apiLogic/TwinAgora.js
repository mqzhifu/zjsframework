import * as Cfg from "./../config.js";
import * as HttpRequest from "./../httpRequest.js"

class TwinAgora{
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
    
    //录屏时，要先从声网，申请一个资源ID，之后，才能开始（声网限制：每秒最多请求10次）
    TwinAgoraCloudRecordCreateAcquire(obj,callback){
        let uri = "/twin/agora/cloud/record/create/acquire";
        let method = "POST";
        //let loginData = {"clientRequest":{"region":"","resourceExpiredHour":0,"scene":0},"cname":"","uid":""};
        this.callbackList[uri] = callback;
        this.HttpRequest.request(this.CommonCallback.bind(this),uri,this.token,false,method,obj,"");
    }
    //将小文件，合并成一个大文件
    TwinAgoraCloudRecordOssFiles(obj,callback){
        let uri = "/twin/agora/cloud/record/oss/files/{rid}";
        let method = "GET";
        //let loginData = {"rid":""};
        this.callbackList[uri] = callback;
        this.HttpRequest.request(this.CommonCallback.bind(this),uri,this.token,false,method,obj,"");
    }
    //根据上一步获取到的ResourceId，
    TwinAgoraCloudRecordQuery(obj,callback){
        let uri = "/twin/agora/cloud/record/query/{rid}";
        let method = "GET";
        //let loginData = {"rid":""};
        this.callbackList[uri] = callback;
        this.HttpRequest.request(this.CommonCallback.bind(this),uri,this.token,false,method,obj,"");
    }
    //根据上一步获取到的ResourceId，开始录屏，其数据会推送到3方的OSS上
    TwinAgoraCloudRecordStart(obj,callback){
        let uri = "/twin/agora/cloud/record/start";
        let method = "POST";
        //let loginData = {"record_id":0};
        this.callbackList[uri] = callback;
        this.HttpRequest.request(this.CommonCallback.bind(this),uri,this.token,false,method,obj,"");
    }
    //各种异常情况都最好调一下stop，不然OSS要一直花钱呐....~~~~~
    TwinAgoraCloudRecordStop(obj,callback){
        let uri = "/twin/agora/cloud/record/stop/{rid}/{type}";
        let method = "GET";
        //let loginData = {"rid":""};
        this.callbackList[uri] = callback;
        this.HttpRequest.request(this.CommonCallback.bind(this),uri,this.token,false,method,obj,"");
    }
    //使用RTC前，动态获取token，然后再登陆声网，才可正常使用声网的功能(token时效是一天，如果存在且未失效正常返回，否则创建新的)
    TwinAgoraRtcGetToken(obj,callback){
        let uri = "/twin/agora/rtc/get/token";
        let method = "POST";
        //let loginData = {"channel":"","username":""};
        this.callbackList[uri] = callback;
        this.HttpRequest.request(this.CommonCallback.bind(this),uri,this.token,false,method,obj,"");
    }
    //使用RTM前，动态获取token，然后再登陆声网，才可正常使用声网的功能(token时效是一天，如果存在且未失效正常返回，否则创建新的)
    TwinAgoraRtmGetToken(obj,callback){
        let uri = "/twin/agora/rtm/get/token";
        let method = "POST";
        //let loginData = {"channel":"","username":""};
        this.callbackList[uri] = callback;
        this.HttpRequest.request(this.CommonCallback.bind(this),uri,this.token,false,method,obj,"");
    }
    //如：发送标注图次数、发送图片次数、发送视频次数
    TwinAgoraStatisticsEventAlls(obj,callback){
        let uri = "/twin/agora/statistics/event/alls";
        let method = "GET";
        //let loginData = {"start_time":"","end_time":""};
        this.callbackList[uri] = callback;
        this.HttpRequest.request(this.CommonCallback.bind(this),uri,this.token,false,method,obj,"");
    }
    
}
export {TwinAgora}