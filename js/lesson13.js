// LESSON 13 Функции
"use strict";

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    let num = 10;
    console.log(num);
}

showFirstMessage("Hello World!");
console.log(num);

function calc(a, b) {
    return (a + b);
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(2, 10));

function ret() { // Function declaration
    let num = 50;

    // some code


    return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function() {  // Function expression
    console.log("Hello world!");
}

logger();

const calculate = (a, b) => { return a + b }; // Arrow function

console.log(calculate(4, 3));
console.log(calculate(5, 6));
console.log(calculate(2, 10));