// LESSON 29 События и их обработчики
"use strict";

const btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');

// btn.onclick = function() {
//     alert('Click');
// }

// btn.onclick = function() {
//     alert('Second Click');
// }

// let i = 0;
const deleteElement = (e) => {
    console.log(e.target);
    console.log(e.type);
//     i++;
//     if (i == 1) {
//         btn.removeEventListener('click', deleteElement);
//     }
}

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true});
});

const link = document.querySelector('a');

link.addEventListener('click', (event) => {
    event.preventDefault();

    console.log(event.target);
});