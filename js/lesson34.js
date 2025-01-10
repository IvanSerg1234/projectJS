// LESSON 39 Дескрипторы свойств и полезные методы обьектов
'use strict';

const birthday = Symbol('birthday');

const user = {
    name: 'Alex',
    surname: 'Smith',
    [birthday]: '01.01.2000',
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
}
// Object.defineProperty(user, 'birthday', {value: prompt('Date?'), enumerable: true, configurable: true});

// console.log(Object.getOwnPropertyDescriptor(Math, 'PI'));

Object.defineProperty(user, 'showMyPublicData', {enumerable: false});

for (let key in user) console.log(key);
console.log(Object.getOwnPropertyDescriptor(user, birthday));

Object.defineProperties(user, {
    name: {writable: false},
    surname: {writable: false}
})

// writable - разрешает или запрещает изменение свойства
// enumarable - разрешает или запрещает перечисление свойства
// configurable - разрешает или запрещает удаление свойства
// Object.is() - определяет, являются ли два значения одинаковыми
// Object.keys() - возвращает массив всех ключей
// Object.values() - возвращает массив всех значений
// Object.entries() - возвращает массив массивов ключей и значений