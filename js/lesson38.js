// LESSON 43 BigInt
'use strict';

// const bigInt = 123213123124214123123214123214214123n;

const sameBigInt = BigInt(123213123124214123123214123214214123);

console.log(2n === 2); // Деление дает округленное целое значение

let bigInt = 1n;
let number = 2;

console.log(bigInt + BigInt(number));
console.log(Number(bigInt) + number);