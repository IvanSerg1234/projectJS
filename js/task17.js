"use strict";



function amountOfPages(summary) {
    let result = ''; // строка
    let n = 0; // число n которое мы ищем

    for (let i = 1; i <= summary; i++) { // Перебираем числа от 1 до summary
        result += i; // Добавляем число к строке
        if (result.length === summary) { // Если длина строки равна summary то присваиваем n значение i и выходим из цикла
            n = i; // Присваиваем n значение i
            break; // Выходим
        }
    } // Повторяем

    return n; // Возвращаем n
}

console.log(amountOfPages(25));