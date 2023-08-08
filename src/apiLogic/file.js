
import * as ApiLogic from "./apiLogic.js";
class File {
  
    constructor(httpRequest) {
        this.Caller = null;
        this.HttpRequest = httpRequest
    }
    
    SetCaller(callerObj){
        this.Caller = callerObj;
    }
    //大文件走NGINX不现实，而且，中间断了后，无法续传
    FileBigDownload(data,callback,uriReplace){                             
        let uri = "/file/big/download";
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
    //主要是阿里的OSS没有文件移动的功能，被动先用复制再删除的方式实现
    FileCopyOne(data,callback,uriReplace){                             
        let uri = "/file/copy/one";
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
    //先删除本地，可选择删除OSS，注：路径要绝对正确，否则OSS上的文件不会删除
    FileDeleteOne(data,callback,uriReplace){                             
        let uri = "/file/delete/one";
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
    //注意下：阿里的OSS没有文件移动的功能，先复制再删除的方式实现
    FileMoveOne(data,callback,uriReplace){                             
        let uri = "/file/move/one";
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
    //单文件上限20M。支持格式："txt", "doc", "docx", "dotx", "json", "cvs", "xls", "xlsx", "sql", "msword", "ppt", "pptx", "pdf", "wps", "vsd"
    FileUploadDocMulti(data,callback,uriReplace){                             
        let uri = "/file/upload/doc/multi";
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
    //单文件上限20M。支持格式："txt", "doc", "docx", "dotx", "json", "cvs", "xls", "xlsx", "sql", "msword", "ppt", "pptx", "pdf", "wps", "vsd"
    FileUploadDocOne(data,callback,uriReplace){                             
        let uri = "/file/upload/doc/one";
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
    //单图片上限2M。支持格式："jpg", "jpeg", "png", "gif", "x-png", "png", "bmp", "pjpeg", "x-icon", "svg", "webp"。
    FileUploadImgMulti(data,callback,uriReplace){                             
        let uri = "/file/upload/img/multi";
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
    //单图片上限2M。支持格式："jpg", "jpeg", "png", "gif", "x-png", "png", "bmp", "pjpeg", "x-icon", "svg", "webp"。
    FileUploadImgOne(data,callback,uriReplace){                             
        let uri = "/file/upload/img/one";
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
    //有时前端并没有具体文件，而是在与用户交互中：动态产生的文件(图片)流，如：截图(canvas)，这时候直接把文件流传输后端即可,单图片上限2M。支持格式："jpg", "jpeg", "png", "gif", "x-png", "png", "bmp", "pjpeg", "x-icon", "svg", "webp"。
    FileUploadImgOneStreamBase64(data,callback,uriReplace){                             
        let uri = "/file/upload/img/one/stream/base64";
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
    //单文件上限 50 M。支持格式："zip", "rar", "apk", "tar", "jar", "7z", "gz", "rz"
    FileUploadPackagesOne(data,callback,uriReplace){                             
        let uri = "/file/upload/packages/one";
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
    //单文件上限20M。支持格式："mp4", "avi", "rm", "mkv", "wmv", "mov", "flv", "fla", "rmvb", "m3u8", "webm", "ts", "wav"
    FileUploadVideoOne(data,callback,uriReplace){                             
        let uri = "/file/upload/video/one";
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
export {File}