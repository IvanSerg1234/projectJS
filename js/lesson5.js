// LESSON 5 25.12.24 Интерполяция ES6 + Операторы
"use strict";

const category = 'toys';

console.log(`https://someurl.com/${category}/5`); // works only with ``

const user = "Ivan";

alert(`Привет, ${user}`);

console.log('arr' + " - object");
console.log(4 + +"5"); // + перед строкой - унарный плюс, превращает строку в число

let incr = 10,
    decr = 10;

// ++incr;
// --decr;

console.log(++incr);
console.log(--decr);

console.log(5%2);
console.log(2 + 2 * 2 !== "6"); // строгое сравнение

const isChecked = false,
      isClose = false;

console.log(isChecked || !isClose);