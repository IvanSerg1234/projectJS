"use strict"

function showFamily(arr) {
    let res = "Семья состоит из: ";
    for (let i = 0; i < arr.length; i++) {
        res += `${arr[i]} `;
    }
    if (arr.length === 0) {
        res = "Семья пуста";
    }
    return res;
}

console.log(showFamily(['Мама', 'Папа', 'Сын', 'Дочь']));
console.log(showFamily([]));

function standardizeStrings(arr) {
    arr.forEach(city => {
        console.log(city.toLowerCase());
    })
}

console.log(standardizeStrings(['LiSboN', 'KYIV', 'RoME']));

