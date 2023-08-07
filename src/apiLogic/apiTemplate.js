
class ApiLogic{
    //项目没有用户名+密码，只有密钥，拿到 ACCCESS-TOKEN 后，就跟正常用户登陆成功一样，可访问大部分API接口.sign值规则：md5(SecretKey+Timestamp+Access)
    BaseAccessToken(callback){
        let uri = "/base/access/token";
        let method = "POST";
        let loginData = {"grant":{"description":"保留字，先不用","type":"string"},"sign":{"description":"签名:md5(SecretKey+Timestamp+Access)","type":"string"},"timestamp":{"description":"unix 时间戳 10位的","type":"integer"}};
        this.HttpRequest.request(callback,uri,this.token,false,method,loginData,"",this);
    }
        //图片格式：BASE64，防止有人恶意攻击，如：短信轰炸、暴力破解密码等,前端使用方法：<img src="data:image/jpg;base64,接口获取的内容"/>
    BaseCaptcha(callback){
        let uri = "/base/captcha";
        let method = "POST";
        let loginData = {"height":{"description":"图片高度，默认：80，最大：1000","type":"integer"},"width":{"description":"图片宽度，默认：240，最大：1000","type":"integer"}};
        this.HttpRequest.request(callback,uri,this.token,false,method,loginData,"",this);
    }
        //注册/找加密码 使用
    BaseCheckEmail(callback){
        let uri = "/base/check/email";
        let method = "POST";
        let loginData = {"email":{"description":"邮箱","type":"string"},"purpose":{"description":"用途,1注册2找回密码3修改密码4登陆","type":"integer"}};
        this.HttpRequest.request(callback,uri,this.token,false,method,loginData,"",this);
    }
        //注册/找加密码/登陆 使用
    BaseCheckMobile(callback){
        let uri = "/base/check/mobile";
        let method = "POST";
        let loginData = {"mobile":{"description":"手机号","type":"string"},"purpose":{"description":"用途,1注册2找回密码3修改密码4登陆","type":"integer"}};
        this.HttpRequest.request(callback,uri,this.token,false,method,loginData,"",this);
    }
        //登陆 使用
    BaseCheckUsername(callback){
        let uri = "/base/check/username";
        let method = "POST";
        let loginData = {"purpose":{"description":"用途,1注册2找回密码3修改密码4登陆","type":"integer"},"username":{"description":"用户名","type":"string"}};
        this.HttpRequest.request(callback,uri,this.token,false,method,loginData,"",this);
    }
        //用户名/手机/邮箱+密码->登陆，验证成功后，生成token
    BaseLogin(callback){
        let uri = "/base/login";
        let method = "POST";
        let loginData = {"captcha":{"description":"验证码","type":"string"},"captchaId":{"description":"验证码-ID","type":"string"},"password":{"description":"密码","type":"string"},"username":{"description":"用户名：普通字符串、手机号、邮箱","type":"string"}};
        this.HttpRequest.request(callback,uri,this.token,false,method,loginData,"",this);
    }
        //登陆(验证)成功后，生成token
    BaseLoginSms(callback){
        let uri = "/base/login/sms";
        let method = "POST";
        let loginData = {"captcha":{"description":"Code        string `json:\"code\"`","type":"string"},"captchaId":{"description":"图片验证码ID","type":"string"},"mobile":{"description":"手机号","type":"string"},"sms_auth_code":{"description":"手机验证码","type":"string"},"sms_rule_id":{"description":"短信类型，登陆/注册","type":"integer"}};
        this.HttpRequest.request(callback,uri,this.token,false,method,loginData,"",this);
    }
        //3方平台登陆，验证成功后，生成token
    BaseLoginThird(callback){
        let uri = "/base/login/third";
        let method = "POST";
        let loginData = {"birthday":{"description":"生日","type":"integer"},"channel":{"description":"来源渠道","type":"integer"},"confirm_ps":{"description":"确认密码","type":"string"},"ext_diy":{"description":"自定义用户属性，暂未实现","type":"string"},"guest":{"description":"类型,1普通2游客","type":"integer"},"headerImg":{"description":"头像地址","type":"string"},"nickName":{"description":"昵称","type":"string"},"passWord":{"description":"登陆密码 转md5存储","type":"string"},"platform_type":{"description":"3方平台类型，如：微信、QQ、facebook、抖音，此值必填","type":"integer"},"project_id":{"description":"项目Id","type":"integer"},"recommend":{"description":"推荐人","type":"string"},"sex":{"description":"性别","type":"integer"},"test":{"description":"是否为测试用户1是2否","type":"integer"},"third_id":{"description":"3方平台用户ID，此值必填","type":"string"},"third_type":{"description":"三方平台类型","type":"integer"},"userName":{"description":"用户名","type":"string"}};
        this.HttpRequest.request(callback,uri,this.token,false,method,loginData,"",this);
    }
        //单点登陆，各应用收到的接口都会带有token，要到用户中心(微服务)再认证/解析一下，确保安全
    BaseParserToken(callback){
        let uri = "/base/parser/token";
        let method = "POST";
        let loginData = {"token":{"description":"需要解析的token字符串","type":"string"}};
        this.HttpRequest.request(callback,uri,this.token,false,method,loginData,"",this);
    }
        //普通注册，需要有：用户名 密码
    BaseRegister(callback){
        let uri = "/base/register";
        let method = "POST";
        let loginData = {"birthday":{"description":"生日","type":"integer"},"channel":{"description":"来源渠道","type":"integer"},"confirm_ps":{"description":"确认密码","type":"string"},"ext_diy":{"description":"自定义用户属性，暂未实现","type":"string"},"guest":{"description":"类型,1普通2游客","type":"integer"},"headerImg":{"description":"头像地址","type":"string"},"nickName":{"description":"昵称","type":"string"},"passWord":{"description":"登陆密码 转md5存储","type":"string"},"project_id":{"description":"项目Id","type":"integer"},"recommend":{"description":"推荐人","type":"string"},"sex":{"description":"性别","type":"integer"},"test":{"description":"是否为测试用户1是2否","type":"integer"},"third_id":{"description":"三方平台ID","type":"string"},"third_type":{"description":"三方平台类型","type":"integer"},"userName":{"description":"用户名","type":"string"}};
        this.HttpRequest.request(callback,uri,this.token,false,method,loginData,"",this);
    }
        //#desc#
    BaseRegisterSms(callback){
        let uri = "/base/register/sms";
        let method = "POST";
        let loginData = {"captcha":{"description":"图片验证码","type":"string"},"captchaId":{"description":"图片验证码ID","type":"string"},"mobile":{"description":"ProjectId   int    `json:\"project_id\"`    //项目Id","type":"string"},"sms_auth_code":{"description":"短信验证码","type":"string"},"sms_rule_id":{"description":"短信类型，登陆/注册","type":"integer"}};
        this.HttpRequest.request(callback,uri,this.token,false,method,loginData,"",this);
    }
        //登陆、注册、找回密码等使用，目前不支持附件功能，邮件的内容由ruleId匹配（后台录入）
    BaseSendEmail(callback){
        let uri = "/base/send/email";
        let method = "POST";
        let loginData = {"carbon_copy":{"description":"抄送（email格式），可以是多人","items":{"type":"string"},"type":"array"},"receiver":{"description":"接收者（email格式）","type":"string"},"replaceVar":{"additionalProperties":{"type":"string"},"description":"邮件内容模块中变量替换","type":"object"},"rule_id":{"description":"配置规则的ID","type":"integer"},"send_ip":{"description":"发送者IP，如为空系统默认取：请求方的IP,最好给真实的，一但被刷，会使用此值","type":"string"},"send_uid":{"description":"发送者ID，管理员是9999，未知8888","type":"integer"}};
        this.HttpRequest.request(callback,uri,this.token,false,method,loginData,"",this);
    }
        //登陆、注册、找回密码等，短信的内容由ruleId匹配（后台录入）
    BaseSendSms(callback){
        let uri = "/base/send/sms";
        let method = "POST";
        let loginData = {"captcha":{"description":"验证码","type":"string"},"captchaId":{"description":"获取验证码时拿到的Id","type":"string"},"receiver":{"description":"接收者-手机号","type":"string"},"replace_var":{"additionalProperties":{"type":"string"},"description":"邮件内容模块中变量替换","type":"object"},"rule_id":{"description":"配置规则的ID","type":"integer"},"send_ip":{"description":"发送者IP，如为空系统默认取：请求方的IP,最好给真实的，一但被刷，会使用此值","type":"string"},"send_uid":{"description":"发送者ID，管理员是9999，未知8888","type":"integer"}};
        this.HttpRequest.request(callback,uri,this.token,false,method,loginData,"",this);
    }
        //忘记密码后，可发送短信通知，重置密码
    BaseSmsResetPassword(callback){
        let uri = "/base/sms/reset/password";
        let method = "POST";
        let loginData = {"mobile":{"description":"手机号","type":"string"},"new_password_confirm":{"description":"新密码确认","type":"string"},"newPassword":{"description":"新密码","type":"string"},"password":{"description":"旧密码","type":"string"},"sms_auth_code":{"description":"短信验证码","type":"string"},"sms_rule_id":{"description":"短信类型，登陆/注册","type":"integer"}};
        this.HttpRequest.request(callback,uri,this.token,false,method,loginData,"",this);
    }
        //订阅什么事件就回调什么事件
    CallbackAgoraCloud(callback){
        let uri = "/callback/agora/cloud";
        let method = "POST";
        let loginData = {"eventType":{"type":"integer"},"noticeId":{"type":"string"},"notifyMs":{"type":"integer"},"payload":{"$ref":"#/definitions/v1.AgoraCloudCallbackPayloadReq"},"productId":{"type":"integer"}};
        this.HttpRequest.request(callback,uri,this.token,false,method,loginData,"",this);
    }
        //订阅什么事件就回调什么事件
    CallbackAgoraRtc(callback){
        let uri = "/callback/agora/rtc";
        let method = "POST";
        let loginData = {"eventType":{"type":"integer"},"noticeId":{"type":"string"},"notifyMs":{"type":"integer"},"payload":{"$ref":"#/definitions/v1.AgoraRtcCallbackPayloadReq"},"productId":{"type":"integer"}};
        this.HttpRequest.request(callback,uri,this.token,false,method,loginData,"",this);
    }
        //开始把项目部署到指定的服务器上，本机编译，最后再把代码同步到远端服务器上
    CicdServiceDeploy(callback){
        let uri = "/cicd/service/deploy";
        let method = "POST";
        let loginData = {"flag":{"description":"1本地2远程","type":"integer"},"server_id":{"description":"服务器ID","type":"integer"},"service_id":{"description":"服务ID","type":"integer"}};
        this.HttpRequest.request(callback,uri,this.token,false,method,loginData,"",this);
    }
        //已部署好的项目，正式 发布
    CicdServicePublish(callback){
        let uri = "/cicd/service/publish/{id}/{flag}";
        let method = "GET";
        let loginData = null;
        this.HttpRequest.request(callback,uri,this.token,false,method,loginData,"",this);
    }
        //对远端服务器上的 superVisor，管理一个服务，如：停止进程 重启进程 启动进程
    CicdSupervisorProcess(callback){
        let uri = "/cicd/superVisor/process";
        let method = "POST";
        let loginData = {"flag":{"description":"1本地2远程","type":"integer"},"server_id":{"description":"服务器ID","type":"integer"},"service_id":{"description":"服务ID","type":"integer"}};
        this.HttpRequest.request(callback,uri,this.token,false,method,loginData,"",this);
    }
        //#desc#
    ConfigCenterCreateModule(callback){
        let uri = "/config/center/create/module";
        let method = "POST";
        let loginData = {"env":{"description":"环境变量","type":"integer"},"key":{"description":"文件中的key","type":"string"},"module":{"description":"模块/文件名","type":"string"},"value":{"description":"写入时，值","type":"string"}};
        this.HttpRequest.request(callback,uri,this.token,false,method,loginData,"",this);
    }
        //#desc#
    ConfigCenterGetKey(callback){
        let uri = "/config/center/get/key";
        let method = "POST";
        let loginData = {"env":{"description":"环境变量","type":"integer"},"key":{"description":"文件中的key","type":"string"},"module":{"description":"模块/文件名","type":"string"},"value":{"description":"写入时，值","type":"string"}};
        this.HttpRequest.request(callback,uri,this.token,false,method,loginData,"",this);
    }
        //#desc#
    ConfigCenterGetModule(callback){
        let uri = "/config/center/get/module";
        let method = "POST";
        let loginData = {"env":{"description":"环境变量","type":"integer"},"key":{"description":"文件中的key","type":"string"},"module":{"description":"模块/文件名","type":"string"},"value":{"description":"写入时，值","type":"string"}};
        this.HttpRequest.request(callback,uri,this.token,false,method,loginData,"",this);
    }
        //#desc#
    ConfigCenterModuleSetKey(callback){
        let uri = "/config/center/module/set/key";
        let method = "POST";
        let loginData = {"env":{"description":"环境变量","type":"integer"},"key":{"description":"文件中的key","type":"string"},"module":{"description":"模块/文件名","type":"string"},"value":{"description":"写入时，值","type":"string"}};
        this.HttpRequest.request(callback,uri,this.token,false,method,loginData,"",this);
    }
        //大文件走NGINX不现实，而且，中间断了后，无法续传
    FileBigDownload(callback){
        let uri = "/file/big/download";
        let method = "POST";
        let loginData = null;
        this.HttpRequest.request(callback,uri,this.token,false,method,loginData,"",this);
    }
        //主要是阿里的OSS没有文件移动的功能，被动先用复制再删除的方式实现
    FileCopyOne(callback){
        let uri = "/file/copy/one";
        let method = "POST";
        let loginData = {"src_relative_path":{"description":"源：相对路径 + 文件名","type":"string"},"sync_oss":{"description":"是否同步到云oss 1是2否","type":"integer"},"tar_relative_path":{"description":"目标：相对路径 + 文件名","type":"string"}};
        this.HttpRequest.request(callback,uri,this.token,false,method,loginData,"",this);
    }
        //先删除本地，可选择删除OSS，注：路径要绝对正确，否则OSS上的文件不会删除
    FileDeleteOne(callback){
        let uri = "/file/delete/one";
        let method = "POST";
        let loginData = {"relative_path":{"description":"相对路径 + 文件名","type":"string"},"sync_oss":{"description":"是否同步到云oss 1是2否","type":"integer"}};
        this.HttpRequest.request(callback,uri,this.token,false,method,loginData,"",this);
    }
        //注意下：阿里的OSS没有文件移动的功能，先复制再删除的方式实现
    FileMoveOne(callback){
        let uri = "/file/move/one";
        let method = "POST";
        let loginData = {"src_relative_path":{"description":"源：相对路径 + 文件名","type":"string"},"sync_oss":{"description":"是否同步到云oss 1是2否","type":"integer"},"tar_relative_path":{"description":"目标：相对路径 + 文件名","type":"string"}};
        this.HttpRequest.request(callback,uri,this.token,false,method,loginData,"",this);
    }
        //单文件上限20M。支持格式："txt", "doc", "docx", "dotx", "json", "cvs", "xls","xlsx", "sql", "msword", "ppt", "pptx", "pdf", "wps", "vsd"
    FileUploadDocMulti(callback){
        let uri = "/file/upload/doc/multi";
        let method = "POST";
        let loginData = null;
        this.HttpRequest.request(callback,uri,this.token,false,method,loginData,"",this);
    }
        //单文件上限20M。支持格式："txt", "doc", "docx", "dotx", "json", "cvs", "xls","xlsx", "sql", "msword", "ppt", "pptx", "pdf", "wps", "vsd"
    FileUploadDocOne(callback){
        let uri = "/file/upload/doc/one";
        let method = "POST";
        let loginData = null;
        this.HttpRequest.request(callback,uri,this.token,false,method,loginData,"",this);
    }
        //单图片上限2M。支持格式："jpg", "jpeg", "png", "gif", "x-png", "png", "bmp","pjpeg", "x-icon", "svg", "webp"。
    FileUploadImgMulti(callback){
        let uri = "/file/upload/img/multi";
        let method = "POST";
        let loginData = null;
        this.HttpRequest.request(callback,uri,this.token,false,method,loginData,"",this);
    }
        //单图片上限2M。支持格式："jpg", "jpeg", "png", "gif", "x-png", "png", "bmp","pjpeg", "x-icon", "svg", "webp"。
    FileUploadImgOne(callback){
        let uri = "/file/upload/img/one";
        let method = "POST";
        let loginData = null;
        this.HttpRequest.request(callback,uri,this.token,false,method,loginData,"",this);
    }
        //有时前端并没有具体文件，而是在与用户交互中：动态产生的文件(图片)流，如：截图(canvas)，这时候直接把文件流传输后端即可单图片上限2M。支持格式："jpg", "jpeg", "png", "gif", "x-png", "png", "bmp", "pjpeg", "x-icon", "svg", "webp"。
    FileUploadImgOneStreamBase64(callback){
        let uri = "/file/upload/img/one/stream/base64";
        let method = "POST";
        let loginData = {"file":{"description":"input file 控件的name","type":"string"},"hash_dir":{"description":"自动创建前缀目录 1不使用2月3天4小时","type":"integer"},"module":{"description":"模块/业务名，可用于给文件名加前缀目录","type":"string"},"stream":{"description":"文件流,例：data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOus\n.......","type":"string"},"sync_oss":{"description":"是否同步到云oss 1是2否","type":"integer"}};
        this.HttpRequest.request(callback,uri,this.token,false,method,loginData,"",this);
    }
        //单文件上限 50 M。支持格式："zip", "rar", "apk", "tar", "jar", "7z", "gz","rz"
    FileUploadPackagesOne(callback){
        let uri = "/file/upload/packages/one";
        let method = "POST";
        let loginData = null;
        this.HttpRequest.request(callback,uri,this.token,false,method,loginData,"",this);
    }
        //单文件上限20M。支持格式："mp4", "avi", "rm", "mkv", "wmv", "mov", "flv", "fla","rmvb", "m3u8", "webm", "ts", "wav"
    FileUploadVideoOne(callback){
        let uri = "/file/upload/video/one";
        let method = "POST";
        let loginData = null;
        this.HttpRequest.request(callback,uri,this.token,false,method,loginData,"",this);
    }
        //用于断线重连，数据量可能较大
    FrameSyncRoomHistory(callback){
        let uri = "/frame/sync/room/history";
        let method = "POST";
        let loginData = {"playerId":{"type":"integer"},"roomId":{"type":"string"},"sequenceNumberEnd":{"type":"integer"},"sequenceNumberStart":{"type":"integer"},"sourceUid":{"type":"integer"}};
        this.HttpRequest.request(callback,uri,this.token,false,method,loginData,"",this);
    }
        //RULE是后台录入的，一次匹配的大部分的配置信息
    GameMatchRule(callback){
        let uri = "/game/match/rule/{id}";
        let method = "GET";
        let loginData = null;
        this.HttpRequest.request(callback,uri,this.token,false,method,loginData,"",this);
    }
        //报名是以（组）为单位的，而校验是以 player 为单位的
    GameMatchSign(callback){
        let uri = "/game/match/sign";
        let method = "POST";
        let loginData = {"addition":{"type":"string"},"group_id":{"type":"integer"},"player_sets":{"items":{"$ref":"#/definitions/pb.GameMatchSignPlayer"},"type":"array"},"rule_id":{"type":"integer"},"source_uid":{"type":"integer"}};
        this.HttpRequest.request(callback,uri,this.token,false,method,loginData,"",this);
    }
        //删除已参与匹配的玩家信息，以组为单位，如果组里是多个人，其中一个人取消，组里其它的玩家一并都得跟着取消
    GameMatchSignCancel(callback){
        let uri = "/game/match/sign/cancel";
        let method = "GET";
        let loginData = {"group_id":{"type":"integer"},"rule_id":{"type":"integer"},"source_uid":{"type":"integer"}};
        this.HttpRequest.request(callback,uri,this.token,false,method,loginData,"",this);
    }
        //后期考虑替换掉PHP解析过程，直接用GO
    GatewayActionMap(callback){
        let uri = "/gateway/action/map";
        let method = "GET";
        let loginData = null;
        this.HttpRequest.request(callback,uri,this.token,false,method,loginData,"",this);
    }
        //主要是长连接的配置(端口|协议)
    GatewayConfig(callback){
        let uri = "/gateway/config";
        let method = "GET";
        let loginData = null;
        this.HttpRequest.request(callback,uri,this.token,false,method,loginData,"",this);
    }
        //长连接列表，FD => UID
    GatewayFdList(callback){
        let uri = "/gateway/fd/list";
        let method = "GET";
        let loginData = null;
        this.HttpRequest.request(callback,uri,this.token,false,method,loginData,"",this);
    }
        //proto接口及GRPC微服务函数的信息等
    GatewayProto(callback){
        let uri = "/gateway/proto";
        let method = "GET";
        let loginData = null;
        this.HttpRequest.request(callback,uri,this.token,false,method,loginData,"",this);
    }
        //给某个UID发送一条消息，主要用于测试
    GatewaySendMsg(callback){
        let uri = "/gateway/send/msg";
        let method = "POST";
        let loginData = {"content":{"type":"string"},"source_project_id":{"type":"integer"},"source_uid":{"type":"integer"},"target_project_id":{"type":"integer"},"target_uids":{"type":"string"},"type":{"type":"integer"}};
        this.HttpRequest.request(callback,uri,this.token,false,method,loginData,"",this);
    }
        //通过网关调取后端服务(grpc)
    GatewayService(callback){
        let uri = "/gateway/service/{service_name}/{func_name}";
        let method = "POST";
        let loginData = null;
        this.HttpRequest.request(callback,uri,this.token,false,method,loginData,"",this);
    }
        //metrics
    GatewayTotal(callback){
        let uri = "/gateway/total";
        let method = "GET";
        let loginData = null;
        this.HttpRequest.request(callback,uri,this.token,false,method,loginData,"",this);
    }
        //注意参数
    MailInfo(callback){
        let uri = "/mail/info";
        let method = "POST";
        let loginData = {"auto_receiver_del":{"description":"自动更新为：接收者已删除","type":"integer"},"auto_receiver_read":{"description":"自动更新为：接收者已读","type":"integer"},"id":{"type":"integer"}};
        this.HttpRequest.request(callback,uri,this.token,false,method,loginData,"",this);
    }
        //注意参数
    MailList(callback){
        let uri = "/mail/list";
        let method = "POST";
        let loginData = {"box_type":{"description":"1收件箱2发件箱4全部","type":"integer"},"expire":{"description":"1消息已过期2消息未过期","type":"integer"},"page":{"description":"当前页数","type":"integer"},"pageSize":{"description":"每页多少条记录","type":"integer"},"receiver_del":{"description":"1接收者已删除2接收者未删除","type":"integer"},"receiver_read":{"description":"1接收者已读2接收者未读","type":"integer"}};
        this.HttpRequest.request(callback,uri,this.token,false,method,loginData,"",this);
    }
        //注意参数
    MailSend(callback){
        let uri = "/mail/send";
        let method = "POST";
        let loginData = {"receiver":{"description":"接收者: uid or grpuId or tagId or uids","type":"string"},"replaceVar":{"additionalProperties":{"type":"string"},"description":"邮件内容模块中变量替换","type":"object"},"rule_id":{"description":"配置规则的ID","type":"integer"},"send_ip":{"description":"发送者IP，如为空系统默认取：请求方的IP,最好给真实的，一但被刷，会使用此值","type":"string"},"send_time":{"description":"定时发送，unixStamp 必须大于当前时间","type":"integer"},"send_uid":{"description":"发送者ID，管理员是9999，未知8888","type":"integer"}};
        this.HttpRequest.request(callback,uri,this.token,false,method,loginData,"",this);
    }
        //用于后台统计
    PersistenceLogPush(callback){
        let uri = "/persistence/log/push";
        let method = "POST";
        let loginData = {"action":{"description":"动作描述，如：user_client_a_button ,user_open_window ,  user_pay ,user_order","type":"string"},"category":{"description":"分类ID，保留字，暂不使用","type":"integer"},"msg":{"description":"自定义消息体，算是对action的一种补充","type":"string"},"project_id":{"description":"项目/服务/app- Id","type":"integer"},"uid":{"description":"用户ID","type":"integer"}};
        this.HttpRequest.request(callback,uri,this.token,false,method,loginData,"",this);
    }
        //用于后台统计
    PersistenceLogPushFile(callback){
        let uri = "/persistence/log/push/file";
        let method = "POST";
        let loginData = null;
        this.HttpRequest.request(callback,uri,this.token,false,method,loginData,"",this);
    }
        //用于后台统计
    PersistenceLogPushFileJson(callback){
        let uri = "/persistence/log/push/file/json";
        let method = "POST";
        let loginData = null;
        this.HttpRequest.request(callback,uri,this.token,false,method,loginData,"",this);
    }
        //用于开发工具测试
    ToolsProjectInfo(callback){
        let uri = "/tools/project/info/{id}";
        let method = "GET";
        let loginData = null;
        this.HttpRequest.request(callback,uri,this.token,false,method,loginData,"",this);
    }
        //录屏时，要先从声网，申请一个资源ID，之后，才能开始（声网限制：每秒最多请求10次）
    TwinAgoraCloudRecordCreateAcquire(callback){
        let uri = "/twin/agora/cloud/record/create/acquire";
        let method = "POST";
        let loginData = {"clientRequest":{"$ref":"#/definitions/util.AgoraAcquireClientReq","description":"详细的配置信息"},"cname":{"description":"频道名称","type":"string"},"uid":{"description":"声网uid, 最好用类似：99999，而不是用普通用户的UID","type":"string"}};
        this.HttpRequest.request(callback,uri,this.token,false,method,loginData,"",this);
    }
        //将小文件，合并成一个大文件
    TwinAgoraCloudRecordOssFiles(callback){
        let uri = "/twin/agora/cloud/record/oss/files/{rid}";
        let method = "GET";
        let loginData = null;
        this.HttpRequest.request(callback,uri,this.token,false,method,loginData,"",this);
    }
        //根据上一步获取到的ResourceId，
    TwinAgoraCloudRecordQuery(callback){
        let uri = "/twin/agora/cloud/record/query/{rid}";
        let method = "GET";
        let loginData = null;
        this.HttpRequest.request(callback,uri,this.token,false,method,loginData,"",this);
    }
        //根据上一步获取到的ResourceId，开始录屏，其数据会推送到3方的OSS上
    TwinAgoraCloudRecordStart(callback){
        let uri = "/twin/agora/cloud/record/start";
        let method = "POST";
        let loginData = {"record_id":{"type":"integer"}};
        this.HttpRequest.request(callback,uri,this.token,false,method,loginData,"",this);
    }
        //各种异常情况都最好调一下stop，不然OSS要一直花钱呐....~~~~~
    TwinAgoraCloudRecordStop(callback){
        let uri = "/twin/agora/cloud/record/stop/{rid}/{type}";
        let method = "GET";
        let loginData = null;
        this.HttpRequest.request(callback,uri,this.token,false,method,loginData,"",this);
    }
        //使用RTC前，动态获取token，然后再登陆声网，才可正常使用声网的功能(token时效是一天，如果存在且未失效正常返回，否则创建新的)
    TwinAgoraRtcGetToken(callback){
        let uri = "/twin/agora/rtc/get/token";
        let method = "POST";
        let loginData = {"channel":{"description":"频道名称，给rtc使用,RTM可为空","type":"string"},"username":{"description":"用户名 or 用户ID","type":"string"}};
        this.HttpRequest.request(callback,uri,this.token,false,method,loginData,"",this);
    }
        //使用RTM前，动态获取token，然后再登陆声网，才可正常使用声网的功能(token时效是一天，如果存在且未失效正常返回，否则创建新的)
    TwinAgoraRtmGetToken(callback){
        let uri = "/twin/agora/rtm/get/token";
        let method = "POST";
        let loginData = {"channel":{"description":"频道名称，给rtc使用,RTM可为空","type":"string"},"username":{"description":"用户名 or 用户ID","type":"string"}};
        this.HttpRequest.request(callback,uri,this.token,false,method,loginData,"",this);
    }
        //欧美国家要求比较严，必须得有这功能，国内现在也有但不多，目前是用来方便开发/测试的，像脚本做自动化测试生成的用户(需要删除)，以及测试员线上测试时产生的用户数据需要删除（危险甚用）
    UserDelete(callback){
        let uri = "/user/delete";
        let method = "DELETE";
        let loginData = null;
        this.HttpRequest.request(callback,uri,this.token,false,method,loginData,"",this);
    }
        //#desc#
    UserList(callback){
        let uri = "/user/list";
        let method = "POST";
        let loginData = {"page":{"description":"当前页数","type":"integer"},"pageSize":{"description":"每页多少条记录","type":"integer"}};
        this.HttpRequest.request(callback,uri,this.token,false,method,loginData,"",this);
    }
        //#desc#
    UserSetEmail(callback){
        let uri = "/user/set/email";
        let method = "PUT";
        let loginData = {"email":{"description":"邮箱号","type":"string"},"project_id":{"description":"项目Id","type":"integer"},"rule_id":{"description":"邮件类型，登陆/注册","type":"integer"},"sms_auth_code":{"description":"邮件验证码","type":"string"}};
        this.HttpRequest.request(callback,uri,this.token,false,method,loginData,"",this);
    }
        //""
    UserSetInfo(callback){
        let uri = "/user/set/info";
        let method = "POST";
        let loginData = {"birthday":{"description":"生日","type":"integer"},"headerImg":{"description":"头像地址","type":"string"},"nickName":{"description":"昵称","type":"string"},"sex":{"description":"性别","type":"integer"}};
        this.HttpRequest.request(callback,uri,this.token,false,method,loginData,"",this);
    }
        //#desc#
    UserSetMobile(callback){
        let uri = "/user/set/mobile";
        let method = "PUT";
        let loginData = {"mobile":{"description":"手机号","type":"string"},"project_id":{"description":"项目Id","type":"integer"},"rule_id":{"description":"短信类型，登陆/注册","type":"integer"},"sms_auth_code":{"description":"短信验证码","type":"string"}};
        this.HttpRequest.request(callback,uri,this.token,false,method,loginData,"",this);
    }
        //首次设置 与 修改两个动作可以合成一个，因为没有唯一性验证
    UserSetPassword(callback){
        let uri = "/user/set/password";
        let method = "PUT";
        let loginData = {"new_password_confirm":{"description":"新密码确认","type":"string"},"newPassword":{"description":"新密码","type":"string"},"password":{"description":"旧密码","type":"string"}};
        this.HttpRequest.request(callback,uri,this.token,false,method,loginData,"",this);
    }
        
}
            