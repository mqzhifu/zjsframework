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
