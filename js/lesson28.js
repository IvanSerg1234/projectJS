// LESSON 33 События на мобильных устройствах
"use strict";
// touchstart когда палец касается экрана
// touchmove когда палец двигается по экрану
// touchend когда палец убирается с экрана
// touchenter когда палец заходит на элемент
// touchleave когда палец покидает элемент
// touchcancel когда точка соприкосновения больше не регистрируется на поверхности

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();

        console.log('Start');
        console.log(e.touches);
        console.log(e.targetTouches);
    })

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        console.log(e.targetTouches[0].pageX);
    })

    // box.addEventListener('touchend', (e) => {
    //     e.preventDefault();

    //     console.log('Ended');
    // })

});


// touches
// targetTouches
// changedTouches