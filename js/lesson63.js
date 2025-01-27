"use strict";

// new RegExp('pattern', 'flags');
// /pattern/flags

// const ans = prompt('Введите ваше число');

// const reg = /\d/g;
// console.log(ans.match(reg));

const str = "My name is R2D2";

console.log(str.match(/\D/ig));

// \D - не цифры
// \W - не слова

// \d - цифры
// \w - слова
// \s - пробелы
// i - вне зависимости от регистра
// g - global
// m - многострочный режим

// console.log(ans.search(reg));
// console.log(ans.match(reg));

// const pass = prompt('Password');

// console.log(pass.replace(/\./g, "*"));

// console.log('12-34-56'.replace(/-/g, ':'));

