function task1(){
    let input = prompt("input");

    let isIntNumber = (n) => {
        if (typeof n === "number"){
            if (n.toFixed() - n == 0){
                return true;
            }
            return false;
        }
        return false;
    }
    
    if (!isNaN(+input)){
        isIntNumber(+input) ? alert((+input).toString(16)) : alert((+input).toFixed(0));
    }else if (isNaN(+input)){
        alert(input.toLowerCase() + '\n' + input.toUpperCase());
    }
}

function task2(){
    let sumWidthOfImages = 0;
    let count = 0;
    while(sumWidthOfImages <= 940){
        let userWidth = +prompt("Введите ширину изображения в px:");
        if (count != 0){
            userWidth += 10;
        }else{
            userWidth += 5;
        }

        sumWidthOfImages += userWidth;
        count++;
        console.log(count);
        console.log(sumWidthOfImages);
    }
    alert(`В ряд поместилось ${count} изображений!`)
}

function task3(){
    let input = prompt("Введите число: ");
    let res = {
        n: input,
        ceil: Math.ceil(input),
        floor: Math.floor(input),
        round: Math.round(input)
    }
    console.log(res);
}

function task4(){
    let color = prompt("Введите RGB координаты через запятую:").split(',');
    let colorHex = "#"+(+color[0]).toString(16) + (+color[1]).toString(16) + (+color[2]).toString(16);
    console.log(colorHex);
    document.querySelector("body").style.backgroundColor = colorHex;
    let whiteOrBlack = confirm("Цвет текста: ОК - Чёрный, Отмена - Белый");
    if(whiteOrBlack){
        document.querySelector("body").style.color = "#000000";
    }else{
        document.querySelector("body").style.color = "#ffffff";
    }
}

function task5(){
    let word = "корова";
    let input = prompt("Как правильно пишется слово \"КАРОВА\"");
    let count = 0;
    for(let i = 0; i < word.length; i++){
        if (word[i] != input[i]){
            alert(`Ошибка! ${i+1}-й символ указан неверно!`);
            break;
        }else{
            count++;
        }
    }
    if (word.length == input.length && word.length == count){
        alert("Верно!");
    }
}

function task6(){
    let length = prompt("Введите длины 2-х катетов:").split(',');
    let a = +length[0];
    let b = +length[1];
    let c = Math.sqrt(a*a+b*b);

    function getArea(a,b){
        return (a*b)/2
    }
    function getPerimetr(a,b,c){
        return a+b+c;
    }
    function getSin(a,c){
        return a/c;
    }
    function getCos(b,c){
        return b/c;
    }
    function getTg(a,b){
        return a/b;
    }
    function getCtg(a,b){
        return a/b;
    }
    function getBiss(a,b){
        return (Math.sqrt(2)*a*b)/(a+b);
    }
    function getMediana(a,b,c){
        return 0.5*Math.sqrt(2*b*b + 2*c*c - a*a);
    }
    function getH(a,b){
        let area = getArea(a,b);
        return 2*area/a;
    }
    function getR(a,b,c){
        return (a*b*c)/(4*getArea(a,b));
    }
    function getr(a,b,c){
        return 2*getArea(a,b)/(a+b+c);
    }
    document.write(`
        A: ${a}
        B: ${b}
        C: ${c}
        SIN: ${getSin(a,c)}
        COS: ${getCos(b,c)}
        TG: ${getTg(a,b)}
        CTG: ${getCtg(b,a)}
        Perimetr: ${getPerimetr(a,b,c)}
        Area: ${getArea(a,b)}
        Mediana: ${getMediana(a,b,c)}
        Height: ${getH(a,b)}
        Bissektrisa: ${getBiss(a,b)}
        R: ${getR(a,b,c)}
        r: ${getr(a,b,c)}
    `);
}