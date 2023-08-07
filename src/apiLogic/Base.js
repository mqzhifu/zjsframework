import * as Cfg from "./../config.js";
import * as HttpRequest from "./../httpRequest.js"

class Base{
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
    
    //项目没有用户名+密码，只有密钥，拿到 ACCCESS-TOKEN 后，就跟正常用户登陆成功一样，可访问大部分API接口.sign值规则：md5(SecretKey+Timestamp+Access)
    BaseAccessToken(obj,callback){
        let uri = "/base/access/token";
        let method = "POST";
        //let loginData = {"grant":"","sign":"","timestamp":0};
        this.callbackList[uri] = callback;
        this.HttpRequest.request(this.CommonCallback.bind(this),uri,this.token,false,method,obj,"");
    }
    //图片格式：BASE64，防止有人恶意攻击，如：短信轰炸、暴力破解密码等,前端使用方法：<img src="data:image/jpg;base64,接口获取的内容"/>
    BaseCaptcha(obj,callback){
        let uri = "/base/captcha";
        let method = "POST";
        //let loginData = {"height":0,"width":0};
        this.callbackList[uri] = callback;
        this.HttpRequest.request(this.CommonCallback.bind(this),uri,this.token,false,method,obj,"");
    }
    //注册/找加密码 使用
    BaseCheckEmail(obj,callback){
        let uri = "/base/check/email";
        let method = "POST";
        //let loginData = {"email":"","purpose":0};
        this.callbackList[uri] = callback;
        this.HttpRequest.request(this.CommonCallback.bind(this),uri,this.token,false,method,obj,"");
    }
    //注册/找加密码/登陆 使用
    BaseCheckMobile(obj,callback){
        let uri = "/base/check/mobile";
        let method = "POST";
        //let loginData = {"mobile":"","purpose":0};
        this.callbackList[uri] = callback;
        this.HttpRequest.request(this.CommonCallback.bind(this),uri,this.token,false,method,obj,"");
    }
    //登陆 使用
    BaseCheckUsername(obj,callback){
        let uri = "/base/check/username";
        let method = "POST";
        //let loginData = {"purpose":0,"username":""};
        this.callbackList[uri] = callback;
        this.HttpRequest.request(this.CommonCallback.bind(this),uri,this.token,false,method,obj,"");
    }
    //用户名/手机/邮箱+密码->登陆，验证成功后，生成token
    BaseLogin(obj,callback){
        let uri = "/base/login";
        let method = "POST";
        //let loginData = {"captcha":"","captchaId":"","password":"","username":""};
        this.callbackList[uri] = callback;
        this.HttpRequest.request(this.CommonCallback.bind(this),uri,this.token,false,method,obj,"");
    }
    //登陆(验证)成功后，生成token
    BaseLoginSms(obj,callback){
        let uri = "/base/login/sms";
        let method = "POST";
        //let loginData = {"captcha":"","captchaId":"","mobile":"","sms_auth_code":"","sms_rule_id":0};
        this.callbackList[uri] = callback;
        this.HttpRequest.request(this.CommonCallback.bind(this),uri,this.token,false,method,obj,"");
    }
    //3方平台登陆，验证成功后，生成token
    BaseLoginThird(obj,callback){
        let uri = "/base/login/third";
        let method = "POST";
        //let loginData = {"birthday":0,"channel":0,"confirm_ps":"","ext_diy":"","guest":0,"headerImg":"","nickName":"","passWord":"","platform_type":0,"project_id":0,"recommend":"","sex":0,"test":0,"third_id":"","third_type":0,"userName":""};
        this.callbackList[uri] = callback;
        this.HttpRequest.request(this.CommonCallback.bind(this),uri,this.token,false,method,obj,"");
    }
    //单点登陆，各应用收到的接口都会带有token，可以到用户中心(微服务)再认证/解析一下，确保安全
    BaseParserToken(obj,callback){
        let uri = "/base/parser/token";
        let method = "POST";
        //let loginData = {"token":""};
        this.callbackList[uri] = callback;
        this.HttpRequest.request(this.CommonCallback.bind(this),uri,this.token,false,method,obj,"");
    }
    //普通注册，需要有：用户名 密码
    BaseRegister(obj,callback){
        let uri = "/base/register";
        let method = "POST";
        //let loginData = {"birthday":0,"channel":0,"confirm_ps":"","ext_diy":"","guest":0,"headerImg":"","nickName":"","passWord":"","project_id":0,"recommend":"","sex":0,"test":0,"third_id":"","third_type":0,"userName":""};
        this.callbackList[uri] = callback;
        this.HttpRequest.request(this.CommonCallback.bind(this),uri,this.token,false,method,obj,"");
    }
    //
    BaseRegisterSms(obj,callback){
        let uri = "/base/register/sms";
        let method = "POST";
        //let loginData = {"captcha":"","captchaId":"","mobile":"","sms_auth_code":"","sms_rule_id":0};
        this.callbackList[uri] = callback;
        this.HttpRequest.request(this.CommonCallback.bind(this),uri,this.token,false,method,obj,"");
    }
    //登陆、注册、找回密码等使用，目前不支持附件功能，邮件的内容由ruleId匹配（后台录入）
    BaseSendEmail(obj,callback){
        let uri = "/base/send/email";
        let method = "POST";
        //let loginData = {"carbon_copy":["aaaa","bbbbb"],"receiver":"","replaceVar":{"a":"bbbb"},"rule_id":0,"send_ip":"","send_uid":0};
        this.callbackList[uri] = callback;
        this.HttpRequest.request(this.CommonCallback.bind(this),uri,this.token,false,method,obj,"");
    }
    //登陆、注册、找回密码等，短信的内容由ruleId匹配（后台录入）
    BaseSendSms(obj,callback){
        let uri = "/base/send/sms";
        let method = "POST";
        //let loginData = {"captcha":"","captchaId":"","receiver":"","replace_var":{"a":"bbbb"},"rule_id":0,"send_ip":"","send_uid":0};
        this.callbackList[uri] = callback;
        this.HttpRequest.request(this.CommonCallback.bind(this),uri,this.token,false,method,obj,"");
    }
    //忘记密码后，可发送短信通知，重置密码
    BaseSmsResetPassword(obj,callback){
        let uri = "/base/sms/reset/password";
        let method = "POST";
        //let loginData = {"mobile":"","new_password_confirm":"","newPassword":"","password":"","sms_auth_code":"","sms_rule_id":0};
        this.callbackList[uri] = callback;
        this.HttpRequest.request(this.CommonCallback.bind(this),uri,this.token,false,method,obj,"");
    }
    
}
export {Base}