// LESSON 20 Массивы и псевдомассивы
"use strict"

const arr = [2, 13, 6, 18, 30];
arr.sort(compareNum)
console.log(arr);

function compareNum(a, b) {
    return a - b;
}


// // arr[99] = 0;
// // console.log(arr.length);
// // console.log(arr);

// arr.forEach(function(item, i, arr) {
//     console.log(`${i} элемент: имеет значение ${item} внутри массива ${arr}`);
// })


// arr.pop(); // Удаляет последний элемент массива
// arr.push(10); // Добавляет элемент в конец массива

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// console.log(" ");


// for (let value of arr) {
//     console.log(value);
// }

const str = prompt("", "");
const products = str.split(", ");
products.sort();
console.log(products.join("; "));