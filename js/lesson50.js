// LESSON 55 Функции-конструкторы
"use strict";

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello, ${this.name}`);
    }
}

User.prototype.exit = function() {
    console.log(`User ${this.name} left`);
}

const ivan = new User("Ivan", 20);
const alex = new User("Alex", 30);

ivan.hello();
alex.hello();

ivan.exit();
alex.exit();

console.log(ivan);
console.log(alex);