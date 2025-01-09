// LESSON 37 Живые коллекции и полезные методы
'use strict';

const boxesQuery = document.querySelectorAll('.box');
const boxesGet = document.getElementsByClassName('box');

boxesQuery.forEach(box => {
    if (box.matches('.this')) console.log(box) // matches() проверяет на соответствие селектору
})

console.log(boxesQuery[0].closest('.wrapper')); // closest() ищет ближайший элемент по селектору

// boxesQuery[0].remove(); // (состояние элементов на момент вызова)
// boxesGet[0].remove(); // remove() работает с DOM элементами

// for (let i = 0; i < 5; i++) {
//     const div = document.createElement('div');
//     div.classList.add('box');
//     document.body.append(div);
// }

// console.log(boxesQuery); // Статичная коллекция не смотрит на изменения
// console.log(boxesGet); // Живая коллекция которая следит за изменениями
// // console.log(document.body.children);

// console.log(Array.from(boxesGet));