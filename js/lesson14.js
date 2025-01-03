// LESSON 14 Функции 2.0
"use strict";

const usdCurr = 28;
const eurCurr = 32;
const discount = 0.9;

function convert(amount, curr) {
     return curr * amount;
}

// return. После return функция завершает свою работу
// не ставить пробел после return

function promotion(result) {
    console.log(result * discount);
}

const res = convert(500, usdCurr);
promotion(res);

function test() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        if (i === 3) return;
    }
    console.log('Done');
}

test();

function doNothing() {} // Пустая функция возвращает что то вроде undefined
console.log(doNothing() === undefined);