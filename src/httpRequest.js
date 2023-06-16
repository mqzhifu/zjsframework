import * as Cfg from "./config.js"
import CryptoJS from "crypto-js";

import H from "http"
class HttpRequest {
    Config = Cfg.Config;
    Token  = "";
    constructor(config){
        this.Config = config;
    }

    //发起公共请求
    request(userCallback,uri , userToken,async,httpMethod,httpData,uriReplace,parentObj){
        uri = this.CheckUri(uri);
        this.CheckMethod(httpMethod)

        let httpUrl = this.Config.http.GetUrl(uri);
        // var httpUrl = get_uri_by_name(urlMapKey);
        if (uriReplace){
            for(let key  in uriReplace){
                httpUrl = httpUrl.replace(key,uriReplace[key]);
            }
        }
        console.log("Ajax request ,uri:"+uri , "url:"+httpUrl , " httpMethod:",httpMethod,"httpData:",httpData);

        let httpDataJsonStr = "";
        let encryptData = "";
        if(httpData){
            httpDataJsonStr = JSON.stringify(httpData);
            encryptData = this.EncryptBodyData(httpDataJsonStr);
        }
        //构造 HTTP 请求的 各种 参数
        let op = this.GetRequestOption(encryptData,userToken,uri,httpMethod);
        console.log(op);
        // let hh = H.request(op,this.Callback);
        // let userCallback = callback;
        let req = H.request(op,(res)=>{
            let parent = this;
            res.on('data', function(chunk) {
                // console.log(`响应主体: ${chunk}`);
                if(!chunk){
                    return ;
                }

                let  myData = eval("(" + chunk + ")");
                //     // console.log(parent);
                myData.data = parent.DeEncryptBodyData(myData.data);
                myData.data   = eval("(" + myData.data + ")");
                if(myData.code != 200){
                    console.log("request back err, code:"+myData.code + " msg: "+ myData.msg);
                    return ;
                }

                if("uri" == "/login/base" && data.token != ""){
                    parent.token = data.token;
                }

                if(userCallback){
                    userCallback(myData.data,parentObj);
                }
            } );
        });
        //加入 body 数据
        req.write(encryptData);
        req.on('error', error => {
            console.error("http request err:",error)
        })
        //http request 所有参数构造完成，开始正常请求
        req.end();
        return 1;
    }

    EncryptBodyData(data){
        // console.log("encrypt_body_data DATA_ENCRYPT:",this.Config.encrypt.dataEncrypt," data:",data);
        if( this.Config.encrypt.dataEncrypt <= 0 || !data){//未开启或数据为空，直接返回原数据即可
            return data;
        }

        switch (this.Config.encrypt.dataEncrypt){
            case 1:
                let dataUTF8 = CryptoJS.enc.Utf8.parse(data);
                data = CryptoJS.enc.Base64.stringify(dataUTF8);
                console.log("encrypt_body_data  Base64.encode:",data);
                break;
            case 2:
                let key = CryptoJS.enc.Utf8.parse(this.Config.encrypt.secret);
                let ivT = CryptoJS.enc.Utf8.parse(this.Config.encrypt.iv);
                let encrypted = CryptoJS.AES.encrypt(data, key, {
                    iv: ivT,
                    mode: CryptoJS.mode.CBC,
                    padding: CryptoJS.pad.Pkcs7,
                });
                data = encrypted.toString();
                console.log("encrypt_body_data AES CBC data:", data, " ori:", data);
                break;
            default:
                console.log("err DATA_ENCRYPT value err.")
                break;
        }
        return data;
    }
    CheckMethod(method){
        if(!method){
            throw "method empty"
        }

        if(method != "POST" && method != "GET"){
            throw "method != POST OR GET"
        }
    }
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
    GetCommonHeader(httpDataJsonStr,userToken){
        // console.log(userToken,this.token)
        // if(!userToken){
        //     userToken = this.token;
        // }
        let now =  Math.round(new Date().getTime()/1000).toString();
        // CryptoJS.MD5(str).toString()
        console.log("make sign : md5("+ this.Config.header.projectId +" " + now +" " + this.Config.encrypt.secret +" "+ httpDataJsonStr+")");
        var sign = CryptoJS.MD5( this.Config.header.projectId + now + this.Config.encrypt.secret + httpDataJsonStr).toString();
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

    Callback (res){
        let parent = this;
        console.log('状态码:' + res.statusCode)
        // console.log('响应头:' + JSON.stringify(res.headers))
        res.setEncoding('utf8');


        // this.DeEncryptBodyData("aaa");
        // res.on('data', function(chunk) {
        //     console.log(`响应主体: ${chunk}`);
        //     if(!chunk){
        //         return ;
        //     }
        //
        //     let  myData = eval("(" + chunk + ")");
        //     // console.log(parent);
        //     myData.data = this.DeEncryptBodyData(myData.data);
        //
        //     if(myData.code != 200){
        //         console.log("request back err, code:"+myData.code + " msg: "+ myData.msg);
        //         return ;
        //     }
        //
        // }.bind(parent));



        // res.on('end', () => {
        //     console.log('响应中已无数据');
        // });
    }


    formatUnixTime(us){
        if (us <= 0 ){
            return "--";
        }
        let tims = new Date(us*1000);
        let format = tims.toLocaleString()
        return format;
    }

}

export {HttpRequest};