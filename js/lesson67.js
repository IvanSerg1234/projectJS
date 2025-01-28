// ИНКАПСУЛЯЦИЯ
'use strict';

class User {
    constructor(name, age) {
        this.name = name;
        this._age = age;
    }

    #surname = 'Horb';

    #graduate = 'KhPI';

    say = () => {
        console.log(`Имя пользователя: ${this.name} ${this.#surname}, возраст: ${this._age}`);
    }

    get age() {
        return this._age;
    }

    set age(age) {
        if (typeof age === "number" && age > 0 && age < 110) {
            this._age = age;
        } else {
            console.log('Недопустимое значение');
        }
    } 

    get graduate() {
        return this.#graduate;
    }

    set graduate(graduate) {
        this.#graduate = graduate;
    }
}

const ivan = new User('Ivan', 20);
console.log(ivan.graduate);
console.log(ivan.graduate = 'Oxford');
// console.log(ivan.surname);
ivan.say();