// task 1
function getArea(){
    let radius = +prompt('Введите радиус:',0);
    if (typeof radius === "number" && !isNaN(radius)){
        alert(`D: ${2*radius}`);
        alert(`L: ${Math.PI*2*radius}`);
        alert(`S: ${Math.pow(Math.PI,2)*radius*2}`);
    }else{
        throw new Error("Incorrect value!");
    }
}

//task 2
function addProduct(){
    let n = +prompt("На карте:",0);
    let s = 0;
    let ds = -1;
    while (ds != 0){
        ds = +prompt("Товар:", 0);
        if(n < s+ds){
            alert(`Недостаточно средств!\nНа карте: ${n};\nК списанию(без учета последнего товара): ${s};\nПоследний товар: ${ds}`);
        }else{
            s += ds;
        }
        if (s == n){
            alert("Покупка удалась, все деньги списаны!");
        }
    }
}

//task 3
let task3 = (a=10,b,c = +prompt("3rd:")) => {
    return new String(`a: ${a}\b: ${b}\nc: ${c}`);
}

//task 4
function countOfStudents(){
    let studentsList = new Array();
    while(true){
        let lastNameOfStudent = prompt("Студент:");
        if (lastNameOfStudent){
            studentsList.push(lastNameOfStudent);
        }else{
            break;
        }
    }
    return studentsList.length;
}

//task 5
function task5(){
    const a = +prompt("A:",0);
    const b = +prompt("B:",0);

    function params(a,b){
        return a==b?a*4:a*b;
    }
    /**
     * let params = (a,b)=>{
     *  return a==b?a*4:(a+b)*2;
     * }
     */
    (function(){
        alert(params(a,b));
    })();
}

//task 6
function task6(){
    const N = +prompt("Определите размер галереи: ", 1);
    let images = new Array();
    while(images.length < N){
        if (confirm("Добавить?")){
            images.push(prompt("Элемент:"));
        }
    }
    alert(`Галерея заполнена полностью!
        ${images.map((item, index, value)=>{
            return item+"\n";
        })}
    `);
}

//task 7

function task7(){
    let fact = (n) => {
            if (n == 0 || n == 1){
                return 1;
            }else{
                return n * fact(n-1);
            }
        
    }
    let C = (m,n)=>{
        return fact((m+n-1))/(fact(m-1)*fact(n));
    }
    const letters = 5;
    const nums = 3;
    const result = C(26, letters) * C(10, nums) * 3;
    const y = result / (3600*24*30*12);
    const m = (result-y*3600*24*30*12) / (3600*24*30);
    const days = (result-y*3600*24*30*12-m*3600*24*30) / (3600*24);
    const h = (result-y*3600*24*30*12-m*3600*24*30 - days*3600*24) / 3600;
    const mins = (result-y*3600*24*30*12-m*3600*24*30 - days*3600*24 - h*3600) / 60;
    const sec = result-y*3600*24*30*12-m*3600*24*30 - days*3600*24 - h*3600 - mins*60;

    return `${y} лет ${m} месяцев ${days} дней ${h} часов ${mins} минут ${sec} секунд`;
}