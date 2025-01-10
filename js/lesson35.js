// LESSON 40 Итерируемые (перебираемые) конструкции
'use strict';

const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1993',
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
}

// for (const key in user) {
//     console.log(user[key]);
// }

const arr = ['b', 'a', 'c'];
Array.prototype.someMethod = function() {};

console.dir(arr);

// for (in) получает ключ объекта
// for (of) получает сразу значение объекта

for (const key of arr) {
    console.log(key);
}

// const str = 'string';

// for (const key in str) {
//     console.log(str[key]);
// }

const salaries = {
    John: 500,
    Ivan: 1000,
    Ann: 5000,
    sayHello: function() {
        console.log('Hello');
    }
}

salaries[Symbol.iterator] = function() {
    return {
        current: this.John,
        last: this.Ann,
        next() {
            if (this.current < this.last) {
                this.current += 500;
                return {done: false, value: this.current}
            } else {
                return {done: true}
            }
        }
    }
}

const iterator = salaries[Symbol.iterator]();
console.log(iterator.next());

// for (let res of salaries) {
//     console.log(res);
// }