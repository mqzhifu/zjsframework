/*
    所有配置文件，映射类
*/


//数据传输加密
class Encrypt {
    dataEncrypt = 0;   //1 base64 2 CBC
    secret = "";        //密钥
    iv = "";            //CBC 密钥
    authSign = "";      // 签名是否加密，在HTTP中增加对数据的签名
    constructor(dataEncrypt,secret,iv,authSign){
        this.dataEncrypt = dataEncrypt;
        this.secret = secret;
        this.iv = iv;
        this.authSign = authSign;
    }
}
//HTTP-公共头
class Header{
    sourceType = "";//请求方的设备类型，如：手机、电脑
    projectId = ""; //项目ID,每个项目都有一个，找管理员申请
    access = "";    //最基本的请求密钥，明文的。每个项目一个，也是找管理员申请
    token = "";     //用户登陆成功后，会有一个 token
    authUname = ""; //忽略，管理员使用
    authPs = "";    //忽略，管理员使用
    sign = "";      //对数据的加密后的签名

    constructor(sourceType,projectId,access,token,authUname,authPs,sign){
        this.sourceType = sourceType;
        this.projectId = projectId;
        this.access = access;
        this.token = token;
        this.authUname = authUname;
        this.authPs = authPs;
        this.sign = sign;
    }
}
//HTTP 基础配置
class Http {
    domain = "";    //IP/域名
    port = "";      //端口号，如果是 80 端口，可以不写
    protocol = "";  //http/https
    constructor(domain,port,protocol){
        this.domain = domain;
        this.port = port;
        this.protocol = protocol;
    }

    GetDomain(){}

    GetUrl(uri){//拼装 HTTP 请求的 完整 URL
        if(this.port){
            return this.protocol + "://" + this.domain + ":" +this.port + "" +uri;
        }else{
            return this.protocol + "://" + this.domain + "" +uri;
        }


    }
}
//整个配置的基类
class Config {
    header = Header;    //HTTP-头信息
    encrypt = Encrypt;  //传输加密
    http  = Http;       //http 基础类

    constructor(header,encrypt,http){
        this.header = header;
        this.encrypt = encrypt;
        this.http = http;
    }
}

export {Http,Header,Config,Encrypt};