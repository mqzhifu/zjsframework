import * as ApiLogicBase   from "./Base.js";
import * as ApiLogicCallback   from "./Callback.js";
import * as ApiLogicCicd   from "./Cicd.js";
import * as ApiLogicConfigCenter   from "./ConfigCenter.js";
import * as ApiLogicFile   from "./File.js";
import * as ApiLogicFrameSync   from "./FrameSync.js";
import * as ApiLogicGameMatch   from "./GameMatch.js";
import * as ApiLogicGateway   from "./Gateway.js";
import * as ApiLogicGoods   from "./Goods.js";
import * as ApiLogicMail   from "./Mail.js";
import * as ApiLogicSystem   from "./System.js";
import * as ApiLogicOrders   from "./Orders.js";
import * as ApiLogicPersistence   from "./Persistence.js";
import * as ApiLogicTools   from "./Tools.js";
import * as ApiLogicTwinAgora   from "./TwinAgora.js";
import * as ApiLogicUser   from "./User.js";


this.apiLogicBase  = new  ApiLogicBase.Base(this.HttpRequest) 
this.apiLogicCallback  = new  ApiLogicCallback.Callback(this.HttpRequest) 
this.apiLogicCicd  = new  ApiLogicCicd.Cicd(this.HttpRequest) 
this.apiLogicConfigCenter  = new  ApiLogicConfigCenter.ConfigCenter(this.HttpRequest) 
this.apiLogicFile  = new  ApiLogicFile.File(this.HttpRequest) 
this.apiLogicFrameSync  = new  ApiLogicFrameSync.FrameSync(this.HttpRequest) 
this.apiLogicGameMatch  = new  ApiLogicGameMatch.GameMatch(this.HttpRequest) 
this.apiLogicGateway  = new  ApiLogicGateway.Gateway(this.HttpRequest) 
this.apiLogicGoods  = new  ApiLogicGoods.Goods(this.HttpRequest) 
this.apiLogicMail  = new  ApiLogicMail.Mail(this.HttpRequest) 
this.apiLogicSystem  = new  ApiLogicSystem.System(this.HttpRequest) 
this.apiLogicOrders  = new  ApiLogicOrders.Orders(this.HttpRequest) 
this.apiLogicPersistence  = new  ApiLogicPersistence.Persistence(this.HttpRequest) 
this.apiLogicTools  = new  ApiLogicTools.Tools(this.HttpRequest) 
this.apiLogicTwinAgora  = new  ApiLogicTwinAgora.TwinAgora(this.HttpRequest) 
this.apiLogicUser  = new  ApiLogicUser.User(this.HttpRequest) 


 this.apiLogicBase.SetCaller(this);
 this.apiLogicCallback.SetCaller(this);
 this.apiLogicCicd.SetCaller(this);
 this.apiLogicConfigCenter.SetCaller(this);
 this.apiLogicFile.SetCaller(this);
 this.apiLogicFrameSync.SetCaller(this);
 this.apiLogicGameMatch.SetCaller(this);
 this.apiLogicGateway.SetCaller(this);
 this.apiLogicGoods.SetCaller(this);
 this.apiLogicMail.SetCaller(this);
 this.apiLogicSystem.SetCaller(this);
 this.apiLogicOrders.SetCaller(this);
 this.apiLogicPersistence.SetCaller(this);
 this.apiLogicTools.SetCaller(this);
 this.apiLogicTwinAgora.SetCaller(this);
 this.apiLogicUser.SetCaller(this);
