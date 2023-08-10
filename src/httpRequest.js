import * as Cfg from "./config.js"
import CryptoJS from "crypto-js";
import * as Util from "./util.js";

import  axios  from "axios";
class HttpRequest {
    Config = Cfg.Config;
    // Token  = "";
    constructor(config){
        this.Config = config;
    }

    //发起公共HTTP-请求
    //这里参数比较多，主要是相对 灵活些
    //比较恶心的：回调模式
    request(userCallback,uri , userToken,async,httpMethod,httpData,uriReplace){
        uri = this.CheckUri(uri);
        this.CheckMethod(httpMethod)
        //获取完整的URL
        let httpUrl = this.Config.http.GetUrl(uri);
        // if (uriReplace){//有些URI中，包含动态变量，这里做一下替换
        //     console.log("uriReplace:",uriReplace);
        //     for(let key  in uriReplace){
        //         httpUrl = httpUrl.replace("{"+ key + "}",uriReplace[key]);
        //         uri = uri.replace("{"+ key + "}",uriReplace[key]);
        //     }
        // }
        console.log("Http request , url:"+httpUrl , " httpMethod:",httpMethod,"httpData:",httpData);

        let httpDataJsonStr = "";   //JS对象转JSON字符串
        let encryptData = "";       //最终 数据加密后的值
        if(httpData){
            httpDataJsonStr = JSON.stringify(httpData);         //先把：JS对象转JSON字符串
            encryptData = this.EncryptBodyData(httpDataJsonStr);//开始对传输数据进入加密
        }

        let parent = this

        let axiosOp = this.GetAxiosRequestOption(encryptData,userToken,httpUrl,httpMethod);
        axiosOp['data'] = encryptData;
        axios(
            axiosOp
        ) .then(function(res){
            console.log("axios success")
            // console.log(res.data)
            // resDataBuffter = Buffer.concat(resDataBuffter).toString();
            // let  myData = eval("(" + resDataBuffter + ")");
            // console.log("resDataBuffter:",resDataBuffter,"myData:",myData);
            let data = parent.DeEncryptBodyData(res.data);//解密响应数据
            if(userCallback){
                userCallback(uri,null,data);
            }else{
                console.log("http request warning: no callback func.")
            }

        }).catch(error => {
            console.log("axios error");
            console.log(error)
        });
        // //构造 HTTP 请求的 各种 参数
        // let op = this.GetRequestOption(encryptData,userToken,uri,httpMethod);
        // // console.log(op);
        // let req = H.request(op,(res)=>{//请求后的回调
        //     //能进到这里，证明，至少 TCP 连接成功了
        //     console.log('request statusCode:', res.statusCode , " uri:",uri);
        //     if(res.statusCode != 200){
        //         throw "request http status code err " + res.statusCode;
        //     }
        //     let parent = this;
        //     // let responseData = null;
        //     let resDataBuffter = [];
        //     res.on('data', (chunk) => {//读取响应体数据
        //         resDataBuffter.push(chunk);
        //     }).on('end', () => {//响应体数据已读取完成
        //             resDataBuffter = Buffer.concat(resDataBuffter).toString();
        //             let  myData = eval("(" + resDataBuffter + ")");
        //             // console.log("resDataBuffter:",resDataBuffter,"myData:",myData);
        //             myData.data = parent.DeEncryptBodyData(myData.data);//解密响应数据
        //             if(userCallback){
        //                 userCallback(uri,null,myData);
        //             }else{
        //                 console.log("http request warning: no callback func.")
        //             }
        //         }
        //     );
        // });
        // //加入 body 数据
        // req.write(encryptData);
        // req.on('error', error => {
        //     console.error("http request("+httpUrl+") err .",error )
        // })
        // //http request 所有参数构造完成，开始正常请求
        // req.end();
    }

    EncryptBodyData(data){
        // console.log("encrypt_body_data DATA_ENCRYPT:",this.Config.encrypt.dataEncrypt," data:",data);
        if( this.Config.encrypt.dataEncrypt <= 0 || !data){//未开启或数据为空，直接返回原数据即可
            return data;
        }

        switch (this.Config.encrypt.dataEncrypt){
            case 1://base64
                let dataUTF8 = CryptoJS.enc.Utf8.parse(data);
                data = CryptoJS.enc.Base64.stringify(dataUTF8);
                // console.log("encrypt_body_data  Base64.encode:",data);
                break;
            case 2://CBC(Pkcs7)
                let key = CryptoJS.enc.Utf8.parse(this.Config.encrypt.secret);
                let ivT = CryptoJS.enc.Utf8.parse(this.Config.encrypt.iv);
                let encrypted = CryptoJS.AES.encrypt(data, key, {
                    iv: ivT,
                    mode: CryptoJS.mode.CBC,
                    padding: CryptoJS.pad.Pkcs7,
                });
                data = encrypted.toString();
                // console.log("encrypt_body_data AES CBC data:", data, " ori:", data);
                break;
            default:
                let errMsg = "err DATA_ENCRYPT value err.";
                console.log("err DATA_ENCRYPT value err.")
                throw errMsg;
                break;
        }
        return data;
    }
    //检查 http method 是否正确
    CheckMethod(method){
        if(!method){
            throw "method empty"
        }

        if(method != "POST" && method != "GET" && method != "DELETE" && method != "PUT"){
            throw "method != POST OR GET DELETE PUT"
        }
    }
    //检查 uri 是否正确
    CheckUri(uri){
        if(!uri){
            throw "uri empty"
        }
        uri = uri.trim();
        if(uri.slice(0, 1) != "/"){
            throw "first char must '/'"
        }
        return uri;
    }
    DeEncryptBodyData(data){
        if(this.Config.encrypt.dataEncrypt <= 0 || !data){//未开启或数据为空，直接返回原数据即可
            return data;
        }
        // console.log("DeEncryptBodyData:",data);
        switch (this.Config.encrypt.dataEncrypt){
            case 1:
                data = CryptoJS.enc.Base64.parse(data).toString(CryptoJS.enc.Utf8);
                // console.log("de_encrypt_body_data  Base64.encode:",data);
                break;
            case 2:
                var key = CryptoJS.enc.Utf8.parse(this.Config.encrypt.secret);
                var ivT = CryptoJS.enc.Utf8.parse(this.Config.encrypt.iv);
                let encrypted = CryptoJS.AES.decrypt(data, key, {
                    iv: ivT,
                    mode: CryptoJS.mode.CBC,
                    padding: CryptoJS.pad.Pkcs7,
                }).toString(CryptoJS.enc.Utf8);
                data = encrypted;
                break;
            default:
                console.log("err");
        }
        return data;
    }
    GetAxiosRequestOption(httpDataJsonStr,userToken,httpUrl,method){

        let options = {
            url : httpUrl,
            method: method,
            headers: this.GetCommonHeader(httpDataJsonStr,userToken),
        }
        return options;
    }
    //构造 HTTP 公共请求 参数，1基础协议参数 2header公共头信息
    GetRequestOption(httpDataJsonStr,userToken,uri,method){
        let options = {
            hostname:this.Config.http.domain,
            port: parseInt(this.Config.http.port),
            path:uri,
            method: method,
            headers: this.GetCommonHeader(httpDataJsonStr,userToken),
        }
        return options;
    }
    //获取：http header 公共头信息
    GetCommonHeader(httpDataJsonStr,userToken){
        let debugMsg  = " projectId:"+this.Config.header.projectId;
        // console.log(userToken,this.token)
        if(!userToken){
        //     userToken = this.token;
            debugMsg += " userToken: no";
        }else{
            debugMsg += " userToken: yes";
        }

        if(!httpDataJsonStr){
            //     userToken = this.token;
            debugMsg += " httpDataJsonStr: no";
        }else{
            debugMsg += " httpDataJsonStr: yes";
        }

        let now = Util.UnixStamp10();
        let sign = "";
        if(this.Config.encrypt.authSign){
            sign = CryptoJS.MD5( this.Config.header.projectId + now + this.Config.encrypt.secret + httpDataJsonStr).toString();
            // console.log("make sign : md5("+ this.Config.header.projectId +" " + now +" " + this.Config.encrypt.secret +" "+ httpDataJsonStr+")");
        }
        console.log("GetCommonHeader now:",now," authSign:",this.Config.encrypt.authSign,"dataEncrypt:",this.Config.encrypt.dataEncrypt," sign:",sign + debugMsg);
        // let sign = "";
        // console.log("sign:",header_X_Project_Id,now,secret,postData);
        let header = {
            "X-Second-Auth-Uname": this.Config.header.authUname,
            "X-Second-Auth-Ps":this.Config.header.authPs,
            "X-Source-Type": this.Config.header.sourceType,
            "X-Project-Id": this.Config.header.projectId,
            "X-Access": this.Config.header.access,
            "X-Token":userToken,
            "X-Client-Req-Time":now,
            "X-Sign":sign,
            "Content-Type": "application/json;charset=utf-8",
        }

        return header;
    }

}

export {HttpRequest};