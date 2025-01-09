// LESSON 38 Тип данных Symbol
'use strict';

// const obj = {
//     'name': 'Test',
//     [Symbol('id')]: 1,
//     getId: function() {
//         return this[id];
//     }
// }

// // let id = Symbol('id');

// // obj[id] = 123;

// console.log(obj[Object.getOwnPropertySymbols(obj)[0]]);

// for (let key in obj) {
//     console.log(key);
// }

const myAwesomeDB = {
    movies: [],
    actors: [],
    [Symbol.for('id')]: 123
}

// Сторонний код библиотеки

myAwesomeDB.id = '123213124123123';

console.log(myAwesomeDB[Symbol.for('id')]);
console.log(myAwesomeDB);