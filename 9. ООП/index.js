const task1 = require("./task1");
const Student = require("./Student");
const Validator = require("./Validator");

const validator = new Validator();

console.log(validator.isEmail("dmitrii.egorow2014@yandex.ru")); // true
console.log(validator.isEmail("dmitrii.egorow2014yandex.ru"));  // false
console.log(validator.isEmail("dmitrii.egorow2014@yandexru"));  // false
console.log(validator.isEmail("dmitrii.egorow2014@yandexru.")); // false

console.log("********************************************");

console.log(validator.isDomain(".by"));
console.log(validator.isDomain("yandex."));
console.log(validator.isDomain("yandex.by"));
console.log(validator.isDomain("яндекс.бел"));

console.log("********************************************");

console.log(validator.isDate("04:06:2000"));
console.log(validator.isDate("0ch:zero6:2000"));

console.log("*********************************************");

console.log(validator.isPhone("+375292182750"));
console.log(validator.isPhone("+375332182750"));
console.log(validator.isPhone("2182750"));

for (let key in task1){
    console.log(key, task1[key]);
}

console.log("**********************************************");

