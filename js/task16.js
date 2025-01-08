"use strict";

function factorial(n) {
    if (typeof(n) !== 'number' || !Number.isInteger(n)) {
        return 'ERROOOOOOOOR!!!!!';
    }

    if (n >= 1) {
        return n * factorial(n - 1); // Возвращаемся в функцию пока n не станет равным 1, после чего начнется раскрутка стека
    } else {
        return 1;
    }

    // return result n ? n * factorial(n - 1) : 1;
}

console.log(factorial(2.2));