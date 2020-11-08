function task1(){
    let len = arguments.length;
    if (len <= 3){
        return ""+arguments[0]+arguments[1]+arguments[2];
    }else if (len > 3 && len <=5){
        let res = "";
        for (let i  = 0; i < arguments.length; i++){
            res += typeof arguments[i] + "\n";
        }
        return res;
    }else if (len > 5 && len <= 7){
        return arguments.length.toString();
    }else if (len > 7){
        console.log("Очень большое количество параметров!");
    }
}

console.log(task1(1,true,"d"));
console.log(task1(1,2,"3",true,function(){}));
console.log(task1(1,2,3,4,5, null, 45, 42));