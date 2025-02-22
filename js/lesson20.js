// LESSON 25 Динамическая типизация
'use strict';

// To String

// 1)
console.log(typeof(String(null)));
console.log(typeof(String(4)));

// 2)
console.log(typeof(5 + ''));

const num = 5;

console.log("https://vk.com/catalog/" + num);

const fontSize = 26 + 'px';
console.log(fontSize);

// To Number

// 1)

console.log(typeof(Number('4')));

// 2)

console.log(typeof(+'5'));

// 3)
console.log(typeof(parseInt('15px', 10)));


let answ = +prompt("Hello", "");


// To Boolean

// 0, '', null, undefined, NaN; // false

// 1)
let switcher = null;

if (switcher) {
    console.log('Working...');
} else {
    console.log('Not working');
}

switcher = 1;

if (switcher) {
    console.log('Working...');
} else {
    console.log('Not working');
}


// 2)
console.log(typeof(Boolean('4')));

// 3)
console.log(typeof(!!'4'));