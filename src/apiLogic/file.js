import * as Cfg from "./../config.js";
import * as HttpRequest from "./../httpRequest.js"

class File{
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
    
    //大文件走NGINX不现实，而且，中间断了后，无法续传
    FileBigDownload(obj,callback){
        let uri = "/file/big/download";
        let method = "POST";
        //let loginData = {"path":""};
        this.callbackList[uri] = callback;
        this.HttpRequest.request(this.CommonCallback.bind(this),uri,this.token,false,method,obj,"");
    }
    //主要是阿里的OSS没有文件移动的功能，被动先用复制再删除的方式实现
    FileCopyOne(obj,callback){
        let uri = "/file/copy/one";
        let method = "POST";
        //let loginData = {"src_relative_path":"","sync_oss":0,"tar_relative_path":""};
        this.callbackList[uri] = callback;
        this.HttpRequest.request(this.CommonCallback.bind(this),uri,this.token,false,method,obj,"");
    }
    //先删除本地，可选择删除OSS，注：路径要绝对正确，否则OSS上的文件不会删除
    FileDeleteOne(obj,callback){
        let uri = "/file/delete/one";
        let method = "POST";
        //let loginData = {"relative_path":"","sync_oss":0};
        this.callbackList[uri] = callback;
        this.HttpRequest.request(this.CommonCallback.bind(this),uri,this.token,false,method,obj,"");
    }
    //注意下：阿里的OSS没有文件移动的功能，先复制再删除的方式实现
    FileMoveOne(obj,callback){
        let uri = "/file/move/one";
        let method = "POST";
        //let loginData = {"src_relative_path":"","sync_oss":0,"tar_relative_path":""};
        this.callbackList[uri] = callback;
        this.HttpRequest.request(this.CommonCallback.bind(this),uri,this.token,false,method,obj,"");
    }
    //单文件上限20M。支持格式："txt", "doc", "docx", "dotx", "json", "cvs", "xls", "xlsx", "sql", "msword", "ppt", "pptx", "pdf", "wps", "vsd"
    FileUploadDocMulti(obj,callback){
        let uri = "/file/upload/doc/multi";
        let method = "POST";
        //let loginData = {"files":"","module":"","sync_oss":"","hash_dir":""};
        this.callbackList[uri] = callback;
        this.HttpRequest.request(this.CommonCallback.bind(this),uri,this.token,false,method,obj,"");
    }
    //单文件上限20M。支持格式："txt", "doc", "docx", "dotx", "json", "cvs", "xls", "xlsx", "sql", "msword", "ppt", "pptx", "pdf", "wps", "vsd"
    FileUploadDocOne(obj,callback){
        let uri = "/file/upload/doc/one";
        let method = "POST";
        //let loginData = {"file":"","module":"","sync_oss":"","hash_dir":""};
        this.callbackList[uri] = callback;
        this.HttpRequest.request(this.CommonCallback.bind(this),uri,this.token,false,method,obj,"");
    }
    //单图片上限2M。支持格式："jpg", "jpeg", "png", "gif", "x-png", "png", "bmp", "pjpeg", "x-icon", "svg", "webp"。
    FileUploadImgMulti(obj,callback){
        let uri = "/file/upload/img/multi";
        let method = "POST";
        //let loginData = {"files":"","module":"","sync_oss":"","hash_dir":""};
        this.callbackList[uri] = callback;
        this.HttpRequest.request(this.CommonCallback.bind(this),uri,this.token,false,method,obj,"");
    }
    //单图片上限2M。支持格式："jpg", "jpeg", "png", "gif", "x-png", "png", "bmp", "pjpeg", "x-icon", "svg", "webp"。
    FileUploadImgOne(obj,callback){
        let uri = "/file/upload/img/one";
        let method = "POST";
        //let loginData = {"file":"","module":"","sync_oss":"","hash_dir":""};
        this.callbackList[uri] = callback;
        this.HttpRequest.request(this.CommonCallback.bind(this),uri,this.token,false,method,obj,"");
    }
    //有时前端并没有具体文件，而是在与用户交互中：动态产生的文件(图片)流，如：截图(canvas)，这时候直接把文件流传输后端即可,单图片上限2M。支持格式："jpg", "jpeg", "png", "gif", "x-png", "png", "bmp", "pjpeg", "x-icon", "svg", "webp"。
    FileUploadImgOneStreamBase64(obj,callback){
        let uri = "/file/upload/img/one/stream/base64";
        let method = "POST";
        //let loginData = {"file":"","hash_dir":0,"module":"","stream":"","sync_oss":0};
        this.callbackList[uri] = callback;
        this.HttpRequest.request(this.CommonCallback.bind(this),uri,this.token,false,method,obj,"");
    }
    //单文件上限 50 M。支持格式："zip", "rar", "apk", "tar", "jar", "7z", "gz", "rz"
    FileUploadPackagesOne(obj,callback){
        let uri = "/file/upload/packages/one";
        let method = "POST";
        //let loginData = {"file":"","module":"","sync_oss":"","hash_dir":""};
        this.callbackList[uri] = callback;
        this.HttpRequest.request(this.CommonCallback.bind(this),uri,this.token,false,method,obj,"");
    }
    //单文件上限20M。支持格式："mp4", "avi", "rm", "mkv", "wmv", "mov", "flv", "fla", "rmvb", "m3u8", "webm", "ts", "wav"
    FileUploadVideoOne(obj,callback){
        let uri = "/file/upload/video/one";
        let method = "POST";
        //let loginData = {"file":"","module":"","sync_oss":"","hash_dir":""};
        this.callbackList[uri] = callback;
        this.HttpRequest.request(this.CommonCallback.bind(this),uri,this.token,false,method,obj,"");
    }
    
}
export {File}