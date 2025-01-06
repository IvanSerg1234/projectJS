// LESSON 26 Замыкание и лексическое окружение
'use strict';

// let number = 5; debugger

// function logNumber() {
//     console.log(number);debugger
// }

// number = 6;

// logNumber(); debugger


// number = 8;

// logNumber(); debugger

function createCounter() {
    let counter = 0;
    
    const myFunction = function() {
        counter = counter + 1;
        return counter;
    }

    return myFunction;
}


const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();

console.log(c1, c2, c3);

// {
//     let msg = 'Hello';
// }

console.log(msg) // error

for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
        let num = 3;
    }

    console.log(num); // Num Доступен только внутри цикла
}

console.log(typeof(NaN));

let time = '';
5 > 3 || 2 ? time = 'Day' : time = 'Night' 

console.log(time);