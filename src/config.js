class Encrypt {
    dataEncrypt = 0;
    secret = "";
    iv = "";
    constructor(dataEncrypt,secret,iv){
        this.dataEncrypt = dataEncrypt;
        this.secret = secret;
        this.iv = iv;
    }
}
class Header{
    sourceType = "";
    projectId = "";
    access = "";
    token = "";
    authUname = "";
    authPs = "";
    sign = "";

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

class Http {
    domain = "";
    port = "";
    protocol = "";
    constructor(domain,port,protocol){
        this.domain = domain;
        this.port = port;
        this.protocol = protocol;
    }

    GetDomain(){}

    GetUrl(uri){
        if(this.port){
            return this.protocol + "://" + this.domain + ":" +this.port + "/" +uri;
        }else{
            return this.protocol + "://" + this.domain + "/" +uri;
        }


    }
}

class Config {
    header = Header;
    encrypt = Encrypt;
    http  = Http;

    constructor(header,encrypt,http){
        this.header = header;
        this.encrypt = encrypt;
        this.http = http;
    }
}

// var config =  new Config();

export {Http,Header,Config,Encrypt};