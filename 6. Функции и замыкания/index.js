let currentCount = 1;

function makeCounter() {
    return function() {
        return currentCount++;
    };
}

let counter = makeCounter();
let counter2 = makeCounter();

console.log(counter());
console.log(counter());

console.log(counter2());
console.log(counter2());