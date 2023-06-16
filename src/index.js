import * as Cfg from "./config.js"
import * as ApiLogic   from "./apiLogic.js"

let http = new Cfg.Http("127.0.0.1","1111","http");
let header =  new Cfg.Header("12","6","imzgoframe","","xiaoz","qwerASDFzxcv");
let encrypt =  new Cfg.Encrypt(1,"ckZgoframe201310","ckZgoframe201310")

let apiApiLogic  = new ApiLogic.ApiLogic(header,encrypt,http);
function testInit(){
    apiApiLogic.UserLogin("frame_sync_1 or ' where 1=1","123456 where 1=1 ",callLoginBack);
}

function callLoginBack(data){
    console.log("self UserCallLoginBack success.")
    // testGateway();
}

function testGateway(){
    apiApiLogic.GatewayConfig(GatewayConfigBack)
}

function GatewayConfigBack(data,obj){
    console.log("GatewayConfigBack",data);
    apiApiLogic.GatewayActionMap(GatewayActionMapBack)
}

function GatewayActionMapBack(data,obj){
    // console.log("GatewayActionMapBack:",data);//数据太大，输出太多
    console.log("GatewayActionMapBack suceess");
    apiApiLogic.GatewayFdList();
}


testInit();







