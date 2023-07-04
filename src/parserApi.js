import yaml from "yamljs"
import fs from "fs"
class ParserApi{
    constructor(logLevel) {
        this.logLevel = logLevel;
    }

    Init(){
        let swaggerContent = yaml.load("./../swagger.yaml")
        // console.log("swaggerContent:",swaggerContent.paths);

        // let jsonstr = JSON.stringify(swaggerContent);
        // let jsonTemp = JSON.parse(jsonstr, null);

        // console.log(jsonTemp.paths["/base/login"]["post"].parameters[3].schema["$ref"])
        let templateFuncs = "";
        let sets = swaggerContent.paths;
        for (let path in sets) {
            for (let method in  sets[path]) {
                let row = sets[path][method];
                console.log("path:"+ path +" , method:"+method + " , "+ "" );
                if(  typeof(row.parameters) =="undefined" ){
                    // console.log( "warning: function not parameters :",sets[path][method])
                    templateFuncs += this.makeFunction(path,method,row.description,"no parameters","","");
                    continue;
                }
                let parametersTypeIsBody = 0;//参数如果是json-body 模式，就一个参数(是一个对象)
                let parametersList = [];//保存 每个参数的 描述信息

                console.log("parameters cnt:",this.ObjCount(row.parameters));
                for (let para in row.parameters) {//遍历参数
                    // console.log("para key:",para)
                    if(row.parameters[para].in == "header"){
                        // console.log("im header")
                        continue;
                    }else if (row.parameters[para].in == "body"){
                        // console.log("im body")
                        parametersTypeIsBody = 1;
                        // console.log(row.parameters[para])
                        if( typeof(  row.parameters[para].schema["$ref"] ) !="undefined"){
                            let objKey =  row.parameters[para].schema["$ref"];//指向 某个 结构体对象
                            let objKeyArr = objKey.split("/");//对象的路径有前缀，得去掉
                            let obj = objKeyArr[2];
                            // swaggerContent[definitions][]
                            // console.log("objKey:",objKey);
                            templateFuncs += this.makeFunction(path,method,row.description,"body",obj,swaggerContent);
                        }
                    } else if(row.parameters[para].in == "path"){
                        console.log("im path")
                        parametersList.push(row.parameters[para]);
                    } else if(row.parameters[para].in == "formData"){
                        parametersList.push(row.parameters[para]);
                        console.log("im formData")
                    }else{
                        console.log("not found :",row.parameters[para])
                    }
                }//遍历参数
                if(!parametersTypeIsBody){
                    console.log("parametersList cnt:",parametersList.length);
                    if( parametersList.length > 0 ){
                        let templateFuncsRow = this.makeFunction(path,method,row.description,"path","","null");
                        templateFuncs += templateFuncsRow;
                        // console.log(parametersList,templateFuncsRow)
                        // return 1;
                    }
                }
            }//method
        }//paths
        let template = this.GetTemplate();
        template = template.replace("#functions#",templateFuncs)
        fs.writeFile('./apiTemplate.js',template,function(err, dataStr){
            console.log("fs.writeFile back err:",err)
        });
    }
    GetTemplate(){
        let code =
            `
class ApiLogic{
    #functions#
}
            `;
        return code;
    }
    GetFunctionTemplate(){
        let code =
    `//#desc#
    #Funcname#(callback){
        let uri = "#uri#";
        let method = "#method#";
        let loginData = #body#;
        this.HttpRequest.request(callback,uri,this.token,false,method,loginData,"",this);
    }
        `;
        return code;
    }

    makeFunction(path , method,description,type,obj,swaggerContent){
        let functionName = this.ParserFuncNameByPath(path);//解析函数名
        let code = this.GetFunctionTemplate();//获取函数体内的代码模板
        code = code.replace("#uri#",path);
        code = code.replace("#method#",method.toUpperCase());
        code = code.replace("#Funcname#",functionName);
        if( typeof(description)!="undefined"){
            console.log("row.description:",description)
            let desc = description.replace("\n","");
            code = code.replace("#desc#",desc);
        }

        switch (type){
            case "body":
                if(obj !=  "request.Empty"){
                    code = code.replace("#body#",JSON.stringify(swaggerContent.definitions[obj].properties));
                }else{
                    code = code.replace("#body#","null");
                }
                break;
            case "path":
                code = code.replace("#body#","null");
                // console.log("path")
                break;
            case "no parameters":
                code = code.replace("#body#","null");
                break;
            default:
                console.log("switch err: type ",type)
        }

        return code;
        // console.log(code)
    }

    // f( obj ) {
    //     for( var i  in  obj ) {
    //         if  ( typeof  obj[i] === "object"  ) {
    //             f ( obj[i] );
    //         }else{
    //             this.arr.push( obj[i] );
    //         }
    //     }
    // }

    ParserFuncNameByPath(path){
        let functionName = "";
        let pathArr = path.split("/");

        for(var i=0;i<pathArr.length;i++){
            if(pathArr[i] == "/"){
                continue;
            }

            if(pathArr[i][0] == "{"){//有些函数URL中，包含动态变量，如：/{id}/{name}
                continue;
            }
            //首字母转大写
            let n = pathArr[i].toLowerCase().replace(/( |^)[a-z]/g,(L)=>L.toUpperCase());
            functionName += n;
        }
        return functionName
    }

    ObjCount(obj){
        var cnt = 0;
        for(let key in obj){
            cnt++;
        }
        return cnt;
    }

}

let parserApi = new ParserApi("debug");
parserApi.Init();