// LESSON 46 Скрипты и время их выполнения, setTimeout и setInterval
const btn = document.querySelector('.btn');
let timerId,
    i = 0;

function myAnimation() {
    const elem = document.querySelector('.box');
    let position = 0;

    const id = setInterval(frame, 10); // 10ms, default 4ms
    function frame() {
        if (position == 300) {
            clearInterval(id);
        } else {
            position++;
            elem.style.top = position + 'px';
            elem.style.left = position + 'px';
        }
    }
}

btn.addEventListener('click', myAnimation);


// function logger () {
//     if (i === 3) {
//         clearInterval(timerId);
//     }
//     console.log('Hello');
//     i++;
// }

// let id = setTimeout(function log() {
//     console.log('Hello');
//     id = setTimeout(log, 500);
// }, 500);