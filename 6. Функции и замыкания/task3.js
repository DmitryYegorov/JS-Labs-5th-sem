/*
 globalLE: null
 */

function task3(a){
    let b; // {b: undefined, globalLE}
    b = a; // {b: a, globalLE}
    b += 1; // {b: a+1, globalLE}
    let s; // {b: a+1, s: undefined, globalLE}
    s = a + b; // {b: a+1, s: a+b, globalLE}
    return s;
}

console.log(task3(9));