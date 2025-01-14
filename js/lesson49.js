// LESSON 54 MutationObserver, ResizeObserver и contenteditable
'use strict';

const box = document.querySelector('.box');

let observer = new MutationObserver((mutationRecords) => {
    console.log(mutationRecords);
});

observer.observe(box, {
    childList: true
});

observer.disconnect();