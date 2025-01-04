"use strict"

const someString = 'This is some strange string';

function reverse(obj) {
    let reversed = '';
    for (let i = obj.length - 1; i >= 0; i--) {
        reversed += obj[i];
    }

    if (obj === '') {
        reversed = 'Ошибка!';
    }

    return reversed;
}

console.log(reverse(someString));

console.log(reverse(""));

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arrAll, arrCurr) {
    let res = 'Доступные валюты:\n';
    if (arrAll.length === 0) {
        return 'Нет доступных валют';
    }

    for (let i = 0; i < arrAll.length; i++) {
        if (arrAll[i] === arrCurr) {
            continue;
        }
        res += `${arrAll[i]}\n`;
    }

    return res;
}

console.log(availableCurr(['UAH', 'RUB', 'CNY'], 'CNY'));