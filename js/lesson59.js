// LESSON 63 Методы перебора массивов
'use strict';

// filter

// const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

// const shortNames = names.filter(function(name) {
//     return name.length < 5;
// });

// console.log(shortNames);


// map

// let answers = ['IvAn', 'AnnA', 'Hello'];

// answers = answers.map(item => item.toLowerCase());

// console.log(answers);


// every/some

// const some = [4, 'qwq', 'sfreferf'];

// console.log(some.some(item => typeof(item) === 'number')); // Один из

// console.log(some.every(item => typeof(item) === 'number')); // Каждый из


// reduce

// const arr = [4, 5, 1, 3, 2, 6];
// // 0 4
// // 4 5
// // 9 1
// // 10 3
// // 13 2
// // 15 6
// // 21

// // const arr = ['apple', 'pear', 'plum'];
// // const res = arr.reduce((sum, current) => `${sum}, ${current}`);

// const res = arr.reduce((sum, current) => sum + current);

// console.log(res);

const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj)
.filter(item => item[1] === 'persone')
.map(item => item[0]);

console.log(newArr);