// LESSON 47 Сборщик мусора в JavaScript и утечки памяти
"use strict";

// function func() {
//     smth = 'string';
// }

// const someRes = getData();
// const node = document.querySelector('.class');

// setInterval(function() {
//     if (node) {
//         node.innerHTML = someRes;
//     }
// }, 1000);

// function outer() {
//     const potentiallyHugeArray = [];
//     return function inner() {
//         potentiallyHugeArray.push('Hello');
//         console.log('Hello!!');
//     }
// }

// const sayHello = outer();

function createElement() {
    const div = document.createElement('div');
    div.id = 'test';
    document.body.append(testDiv);
}

createElement();

document.body.append(testDiv);

function deleteElement() {
    document.body.removeChild(document.getElementById('test'));
}

deleteElement();