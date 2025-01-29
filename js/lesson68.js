// МОДУЛИ
'use strict';

const app = '123';

const number = 1;

(function() {
    let number = 2;
    console.log(number);
    console.log(number + 3);
}());

console.log(number);

const user = (function(){
    const privat = function() {
        console.log('I am privat!');
    };

    return {
        sayHello: privat
    };
}());

user.sayHello();

const myModule = require('./lesson69');

const myModuleInstance = new myModule();

myModuleInstance.hello();
myModuleInstance.goodbye();

// import {one as first} from './lesson70';

// console.log(first);

// console.log(`${one} and ${two}`);

// import * as data from './lesson70';
// import sayHi from './lesson70';

// console.log(`${data.one} and ${data.two}`);
// data.sayHi();
// sayHi();