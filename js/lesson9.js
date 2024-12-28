// LESSON 9 Логические операторы
"use strict";

// const hamburger = 5;
// const fries = null;

// if (hamburger && fries) {
//     console.log("I'm full!");
// }

// console.log((hamburger && fries));

// const hamburger = 3;
// const fries = 1;
// const cola = 0;

// console.log(hamburger === 3 && cola && fries);

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && 'qedasdfe3adawd');


// if (hamburger === 3 && cola === 1 && fries) {
//     console.log("All're full!");
// } else {
//     console.log("We left your restaurant!");
// }

const hamburger = 0;
const fries = 3;
const cola = 0;
const nuggets = 2;

if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
    console.log("We are good!");
} else {
    console.log("We left your restaurant!");
}

console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets);

let johnReport, alexReport, samReport, mariaReport = 'done';

console.log(johnReport || alexReport || samReport || mariaReport)

console.log(!0);