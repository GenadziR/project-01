'use strict'; 


var number = 5;
{
var sym = Symbol();
var boolean1 = true;
let string = "Hello";
null;
undefined;
var obj = {};
console.log(number, boolean1, string);
}


console.log(number/false);

let number1;
console.log(number1);

let persone = {
    name: "John",
    age: 25,
    isMarried: false
}

console.log(persone.name, persone["age"]);
console.log(persone["age"]);

let arr = ['apple','orange','plun']
console.log(arr, persone.name, arr[2]);



/* let answer = confirm("Тебе 18?");
if (answer) {
    alert(arr);
} else {
    alert("пшел вон");
} */

let answer = prompt("Тебе 18?", "да");
if (answer == "да") {
    alert(arr);
} else {
    alert("пшел вон");
}


