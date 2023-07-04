import * as Cfg from "./config.js"
import * as ApiLogic   from "./apiLogic.js"

let http = new Cfg.Http("127.0.0.1","1111","http");
let header =  new Cfg.Header("12","6","imzgoframe","","xiaoz","qwerASDFzxcv");
let encrypt =  new Cfg.Encrypt(0,"ckZgoframe201310","ckZgoframe201310",0)
let apiApiLogic  = new ApiLogic.ApiLogic(header,encrypt,http);
class Test {
    constructor() {
        this.obj = this;
    }
    start(){
        try{
            let userInfo = {'username':"frame_sync_1","password":"123456"};
            //先登陆获取 USER TOKEN
            apiApiLogic.BaseLogin(userInfo,this.callLoginBack.bind(this));
        }catch (e){
            console.log("exception :",e)
        }
    }


    callLoginBack(uri,err,data){
        console.log("self UserCallLoginBack success.")
        this.testGateway()
    }

    testGateway(){
        apiApiLogic.GatewayConfig(null,this.GatewayConfigBack.bind(this))
    }

    GatewayConfigBack(uri,err,data){
        console.log("GatewayConfigBack",data);
        // apiApiLogic.GatewayActionMap(ull,this.GatewayActionMapBack.bind(this))
    }

    GatewayActionMapBack(data,obj){
        // console.log("GatewayActionMapBack:",data);//数据太大，输出太多
        console.log("GatewayActionMapBack suceess");
        apiApiLogic.GatewayFdList();
    }

}

export {Test}