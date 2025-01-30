// LESSON 74 JS Анимации, requestAnimationFrame
let timerId,
    i = 0;

const btn = document.querySelector('.btn'),
      elem = document.querySelector('.box');
let pos = 0

// function myAnimation() {
//     let pos = 0;

//     const id = setInterval(frame, 10); // 10ms, default 4ms
//     function frame() {
//         if (pos == 300) {
//             clearInterval(id);
//         } else {
//             pos++;
//             elem.style.top = pos + 'px';
//             elem.style.left = pos + 'px';
//         }
//     }
// }


// r s r s r s

function myAnimation() {
    pos++;
    elem.style.top = position + 'px';
    elem.style.left = position + 'px';

    if (pos < 300) {
        requestAnimationFrame(myAnimation);
    }
}

btn.addEventListener('click', () => requestAnimationFrame(myAnimation));

let id = requestAnimationFrame(myAnimation);
cancelAnimationFrame(id);