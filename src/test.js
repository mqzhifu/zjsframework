import * as Cfg from "./config.js"          //引入公共配置信息

import * as ApiLogicBase   from "./apiLogic/Base.js";
import * as ApiLogicCallback   from "./apiLogic/Callback.js";
import * as ApiLogicCicd   from "./apiLogic/Cicd.js";
import * as ApiLogicConfigCenter   from "./apiLogic/ConfigCenter.js";
import * as ApiLogicFile   from "./apiLogic/File.js";
import * as ApiLogicFrameSync   from "./apiLogic/FrameSync.js";
import * as ApiLogicGameMatch   from "./apiLogic/GameMatch.js";
import * as ApiLogicGateway   from "./apiLogic/Gateway.js";
import * as ApiLogicGoods   from "./apiLogic/Goods.js";
import * as ApiLogicMail   from "./apiLogic/Mail.js";
import * as ApiLogicSystem   from "./apiLogic/System.js";
import * as ApiLogicOrders   from "./apiLogic/Orders.js";
import * as ApiLogicPersistence   from "./apiLogic/Persistence.js";
import * as ApiLogicTools   from "./apiLogic/Tools.js";
import * as ApiLogicTwinAgora   from "./apiLogic/TwinAgora.js";
import * as ApiLogicUser   from "./apiLogic/User.js";




//初始化配置信息
let http = new Cfg.Http("127.0.0.1","1111","http");
let header =  new Cfg.Header("12","6","imzgoframe","","xiaoz","qwerASDFzxcv");
let encrypt =  new Cfg.Encrypt(0,"ckZgoframe201310","ckZgoframe201310",0)



let apiLogicBase  = new  ApiLogicBase.Base(header,encrypt,http)
let apiLogicCallback  = new  ApiLogicCallback.Callback(header,encrypt,http)
let apiLogicCicd  = new  ApiLogicCicd.Cicd(header,encrypt,http)
let apiLogicConfigCenter  = new  ApiLogicConfigCenter.ConfigCenter(header,encrypt,http)
let apiLogicFile  = new  ApiLogicFile.File(header,encrypt,http)
let apiLogicFrameSync  = new  ApiLogicFrameSync.FrameSync(header,encrypt,http)
let apiLogicGameMatch  = new  ApiLogicGameMatch.GameMatch(header,encrypt,http)
let apiLogicGateway  = new  ApiLogicGateway.Gateway(header,encrypt,http)
let apiLogicGoods  = new  ApiLogicGoods.Goods(header,encrypt,http)
let apiLogicMail  = new  ApiLogicMail.Mail(header,encrypt,http)
let apiLogicSystem  = new  ApiLogicSystem.System(header,encrypt,http)
let apiLogicOrders  = new  ApiLogicOrders.Orders(header,encrypt,http)
let apiLogicPersistence  = new  ApiLogicPersistence.Persistence(header,encrypt,http)
let apiLogicTools  = new  ApiLogicTools.Tools(header,encrypt,http)
let apiLogicTwinAgora  = new  ApiLogicTwinAgora.TwinAgora(header,encrypt,http)
let apiLogicUser  = new  ApiLogicUser.User(header,encrypt,http)


//测试类
class Test {
    constructor() {
        this.obj = this;
    }
    start(){
        try{
            let userInfo = {'username':"frame_sync_1","password":"123456"};
            //先登陆获取 USER TOKEN
            apiLogicBase.BaseLogin(userInfo,this.callLoginBack.bind(this));
        } catch (e){
            console.log("exception :",e)
        }
    }
    //登陆成功后回调
    callLoginBack(uri,err,data){
        console.log("self UserCallLoginBack success.")
        // this.testGateway()
    }
    //测试长连接
    testGateway(){
        apiApiLogic.GatewayConfig(null,this.GatewayConfigBack.bind(this))
    }
    //获取网关配置信息（注：这里得提前登陆成功 ，拿到 token）
    GatewayConfigBack(uri,err,data){
        console.log("GatewayConfigBack",data);
        apiApiLogic.GatewayActionMap(null,this.GatewayActionMapBack.bind(this))
    }
    //获取 函数/ID 映射关系
    GatewayActionMapBack(data,obj){
        // console.log("GatewayActionMapBack:",data);//数据太大，输出太多
        console.log("GatewayActionMapBack suceess");
        // apiApiLogic.GatewayFdList();
    }

}

export {Test}