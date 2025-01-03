"use strict"

function sayHello(name) {
    return `Привет, ${name}!`;
}

sayHello("John");

function returnNeighboringNumbers(num) {
    let arr = [];
    for (let i = num - 1; i <= num + 1; i++) {
        arr.push(i);
    }
    return arr;
}

console.log(returnNeighboringNumbers(5));

function getMathResult(num, count) {
    if (typeof(count) !== 'number' || count <= 0) {
        return num;
    }

    let str = '';

    for (let i = 1; i <= count; i++) {
        if (i === count) {
            str += `${num * i}`;
        } else {
            str += `${num * i}---`;
        }
    }

    return str;
}