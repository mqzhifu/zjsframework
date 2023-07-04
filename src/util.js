//10 位 UNIX 时间
export function UnixStamp10(){
    return Math.round(new Date().getTime()/1000).toString();
}
//13 位 UNIX 时间
export function UnixStamp13(){
    return new Date().getTime();
}

export function UriTurnFunName(uri){
    let arr = uri.split("/");
    let funcName = "";
    console.log(uri,arr)
    for(let i=0;i<arr.length;i++){
        let s = arr[i].trim();
        // console.log(s)
        if(!s){
            continue;
        }
        funcName += s[0].toUpperCase() + s.slice(1);
    }

    return funcName;
}

