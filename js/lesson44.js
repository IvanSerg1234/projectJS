// LESSON 49 Работа с датами
"use strict";

const now = new Date();
// new Date.parse('2025-01-13');

console.log(now.setHours(40)); // В консоли дата возвращается не в локальном
// времени а в формате UTC
console.log(now);

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log(now.getSeconds());
// console.log(now.getDay());

// console.log(now.getTimezoneOffset());
// console.log(now.getTime());
// console.log(now);

let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 3;
}

let end = new Date();

alert(`Цикл отработал за ${end - start} миллисекунд`);