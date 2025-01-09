// LESSON 36 Оператор опциональной цепочки (?.)
'use strict';

const box = document.querySelector('.box');
const block = document.querySelector('.block');

console.log(block)

// if (block) {
//     console.log(block.textContent);
// }

// console.log(block?.textContent); // Проверяет наличие элемента block
// и если он есть, то выводит его текстовое содержимое

// block?.textContent = '122'; // Ошибка

// console.log(1 + 2);

const userData = {
    name: 'Ivan',
    age: null,
    say: function() {
        console.log('Hello');
    }
}

userData.say();
userData.hey?.();

// if (userData && userData.skills && userData.skills.js) {
//     console.log(userData.skills.js);
// }

console.log(userData?.skills?.js);