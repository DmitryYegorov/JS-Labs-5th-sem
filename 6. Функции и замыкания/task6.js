function sum(a, b){

    this.s = a + b;
    console.log(`a = ${a}, b = ${b}`);

    function ex(){
        this.s = a+b;
    }
}

sum.s = 5 + 6;
console.log(sum.s);