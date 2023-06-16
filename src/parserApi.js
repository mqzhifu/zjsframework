import yaml from "yamljs"
import fs from "fs"
class ParserApi{
    constructor() {
        // this.arr = [];
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
                    console.log( "error function not parameters :",sets[path][method])
                    continue;
                }
                let parametersTypeIsBody = 0;
                let parametersList = [];
                for (let para in row.parameters) {//遍历参数
                    if(row.parameters[para].in == "header"){
                        continue;
                    }else if (row.parameters[para].in == "body"){
                        parametersTypeIsBody = 1;
                        // console.log(row.parameters[para])
                        if( typeof(  row.parameters[para].schema["$ref"] ) !="undefined"){
                            let objKey =  row.parameters[para].schema["$ref"];
                            let objKeyArr = objKey.split("/");
                            // console.log(objKeyArr[2],swaggerContent.definitions[objKeyArr[2]].properties)

                            templateFuncs += this.makeFunction(path,method,row.description,1,objKeyArr[2],swaggerContent);
                            // let functionNane = "";
                            // let pathArr = path.split("/");


                            // for(var i=0;i<pathArr.length;i++){
                            //     if(pathArr[i] == "/"){
                            //         continue;
                            //     }
                            //
                            //     if(pathArr[i][0] == "{"){
                            //         continue;
                            //     }
                            //
                            //     let n = pathArr[i].toLowerCase().replace(/( |^)[a-z]/g,(L)=>L.toUpperCase());
                            //
                            //     functionNane += n;
                            // }
                            //
                            // let code = this.GetFunctionTemplate();
                            // code = code.replace("#uri#",path);
                            // code = code.replace("#method#",method);
                            // code = code.replace("#Funcname#",functionNane);
                            // if( typeof(row.description)!="undefined"){
                            //     console.log("row.description:",row.description)
                            //     let desc = row.description.replace("\n","");
                            //     code = code.replace("#desc#",desc);
                            // }
                            // if( objKeyArr[2] !=  "request.Empty"){
                            //     code = code.replace("#body#",JSON.stringify(swaggerContent.definitions[objKeyArr[2]].properties));
                            // }else{
                            //     code = code.replace("#body#","null");
                            // }
                            //
                            // // console.log(code)
                            // templateFuncs += code;
                        }

                        // swaggerContent[definitions][]
                        // console.log("objKey:",objKey);
                    } else if(row.parameters[para].in == "path"){
                        parametersList.push(row.parameters[para]);
                    } else if(row.parameters[para].in == "formData"){

                    }else{
                        console.log("not founc :",row.parameters[para])
                    }
                }//遍历参数
                if(!parametersTypeIsBody){
                    console.log(parametersList);
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

    makeFunction(path , method,description,isBody,obj,swaggerContent){
        let pathArr = path.split("/");

        let functionName = "";
        for(var i=0;i<pathArr.length;i++){
            if(pathArr[i] == "/"){
                continue;
            }

            if(pathArr[i][0] == "{"){
                continue;
            }

            let n = pathArr[i].toLowerCase().replace(/( |^)[a-z]/g,(L)=>L.toUpperCase());

            functionName += n;
        }

        let code = this.GetFunctionTemplate();
        code = code.replace("#uri#",path);
        code = code.replace("#method#",method);
        code = code.replace("#Funcname#",functionName);
        if( typeof(description)!="undefined"){
            console.log("row.description:",description)
            let desc = description.replace("\n","");
            code = code.replace("#desc#",desc);
        }
        if(obj !=  "request.Empty"){
            if(isBody){
                code = code.replace("#body#",JSON.stringify(swaggerContent.definitions[obj].properties));
            }else{

            }

        }else{
            code = code.replace("#body#","null");
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

}

let parserApi = new ParserApi();
parserApi.Init();