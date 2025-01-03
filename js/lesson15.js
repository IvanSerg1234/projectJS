// LESSON 15 Методы и свойства строк и чисел
"use strict";

const str = "test";

console.log(str.toUpperCase()); // Преобразует строку в верхний регистр
console.log(str.toLowerCase()); // Преобразует строку в нижний регистр
console.log(str);

const fruit = "Some fruit";

console.log(fruit.indexOf("fruit")); // Находим индекс в строке с которого
// начинается слово fruit

const logg = "Hello world";

console.log(logg.slice(6, 12)); // Вырезает часть строки с 6 по 12 символ (не включая)
// slice(arg1, arg2) функция вырезает из строки: arg1 - начало, arg2 - конец 
// slice(arg1) функция вырезает из строки: arg1 - начало и до конца строки

console.log(logg.slice(-5, -1));

console.log(logg.substring(6, 11)); // Не поддерживает отрицательные значения

console.log(logg.substr(6, 5)); // Второй аргумент - количество символов

const num = 12.2;
console.log(Math.round(num)); // Округляет число

const test = "12.2px";
console.log(parseInt(test)); // Переводит строку в число
console.log(parseFloat(test)); // Переводит строку в число с плавающей точкой