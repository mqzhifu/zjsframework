概览
----
主要功能：JS SDK ，给前端 HTTP/WS/TCP 请求的SDK

初衷
------
1. 统一整合前端的请求方式（代码） 
   1. 避免前端犯一些低级错误
   2. 做好封装，做好扩展
   3. 可做模块化管制、版本控制、任意下载、CDN加速
2. 后端的框架可以比较好的推广、使用起来
3. 前端可以略省事儿，避免重复造轮子
4. 降低前端人员成本 ，如：WS/TCP 编程
5. 后端可以略省事儿，一套东西，调试方便。沟通成本也略低


依赖库
----
crypto-js：主要用于数据加密，如：BASE64、CBC、MD5等 




使用
-----
最简单的使用：
```

import * as Test from "./test.js"

let test = new Test.Test();
test.start();

```

其内部，大概流程：
1. 初始化配置信息
>config.js ，加密 HTTP 等信息
2. 调用登陆接口，获取 token
>99%的接口都得有 token
3. 开始正常调用其它接口
>path body 格式，都是自动生成的，直接调用函数就行
4. HTTP请求
>构造 HTTP 协议，请求头(公共头、加密签名) 和 BODY（数据加密）、
5. 请求用户的回调函数


文件解释：

1. httpRequest.js
http请求的基础类 + 加密

2. apiLogic.js
主要是设置请求的 URI + BODY ，此文件是可以动态由后端生成的

```
 start(){
     try{
         let userInfo = {'username':"frame_sync_1","password":"123456"};
         //先登陆获取 USER TOKEN
         apiApiLogic.BaseLogin(userInfo,this.callLoginBack.bind(this));
     }catch (e){
         console.log("exception :",e)
     }
 }
 //登陆成功后回调
 callLoginBack(uri,err,data){
     console.log("self UserCallLoginBack success.")
     this.testGateway()
 }
```

长连接使用
-----
```
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

```
1. 长连接也要基于上面 HTTP 的使用，除了 基础的类 与 初始化
>主要还是得依赖 用户登陆，拿至的token
2. 获取长连接的相关配置信息，如：IP PORT 域名 WS的URI 等
3. 获取长连接的 函数名/ID 映射
4. 注册消息回调


