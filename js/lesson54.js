// LESSON 59 Rest оператор и параметры по умолчанию (ES6)
'use strict';

const log = function(a, b, ...rest) {
    console.log(a, b, rest);
};

log('basic', 'rest', 'operator', 'usage');

function calcOrDouble(number, basis = 2) { // basis = 2 - default value
    console.log(number * basis);
};

calcOrDouble(3);