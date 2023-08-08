import * as Cfg from "./config.js"          //引入公共配置信息
import {ApiLogic} from "./apiLogic/apiLogic.js";
import {Ws} from "./websocket.js";

//初始化配置信息
let http = new Cfg.Http("127.0.0.1","1111","http");
let header =  new Cfg.Header("12","6","imzgoframe","","xiaoz","qwerASDFzxcv");
let encrypt =  new Cfg.Encrypt(0,"ckZgoframe201310","ckZgoframe201310",0)

//测试类
class Test {
    constructor() {
        this.obj = this;
        this.apiLogic = new ApiLogic(header,encrypt,http);
        this.gatewayConfig = null;
        this.actionMap =null;
        this.gameMatchRule = null;
    }
    start(){
        try{
            let userInfo = {'username':"frame_sync_1","password":"123456"};
            //先登陆获取 USER TOKEN
            this.apiLogic.apiLogicBase.BaseLogin(userInfo,this.callLoginBack.bind(this));
        } catch (e){
            console.log("exception :",e)
        }
    }
    //登陆成功后回调
    callLoginBack(uri,err,data){
        console.log("self UserCallLoginBack success.")
        this.testGateway()
    }
    //测试长连接
    testGateway(){
        this.apiLogic.apiLogicGateway.GatewayConfig(null,this.GatewayConfigBack.bind(this))
    }
    //获取网关配置信息（注：这里得提前登陆成功 ，拿到 token）
    GatewayConfigBack(uri,err,data){
        console.log("GatewayConfigBack",data);
        this.gatewayConfig = data.data;
        this.apiLogic.apiLogicGateway.GatewayActionMap(null,this.GatewayActionMapBack.bind(this))
    }
    //获取 函数/ID 映射关系
    GatewayActionMapBack(data,obj){
        // console.log("GatewayActionMapBack:",data);//数据太大，输出太多
        console.log("GatewayActionMapBack suceess");
        this.actionMap = data.data;

        this.GameMatchRule();
    }

    GameMatchRule(){
        let uriReplace = {"id" : 1 } ;
        this.apiLogic.apiLogicGameMatch.GameMatchRule(null,this.GameMatchRuleBack.bind(this),uriReplace );
    }
    GameMatchRuleBack(uri,err,data){
        console.log("GameMatchRuleBack:",data);

        this.gameMatchRule = data.data;
        let ws = new Ws(this.gatewayConfig,this.actionMap,this.gameMatchRule);
        ws.Start();
    }

}

export {Test}