"use strict"

function getTimeFromMinutes(minutes) {
    if (typeof(minutes) !== 'number' || minutes < 0 || !Number.isInteger(minutes)) {
        return 'Ошибка, проверьте данные';
    }

    let hours = Math.floor(minutes / 60);
    
    if (hours === 0 || hours === 5 || hours === 6 || hours === 7 || hours === 8 || hours === 9 || hours === 10) {
        return `Это ${hours} часов и ${minutes % 60} минут`;
    } else if (hours === 1) {
        return `Это ${hours} час и ${minutes % 60} минут`;
    } else if (hours > 1 && hours < 5) {
        return `Это ${hours} часа и ${minutes % 60} минут`;
    }
}

console.log(getTimeFromMinutes(150));
console.log(getTimeFromMinutes(50));
console.log(getTimeFromMinutes(0));
console.log(getTimeFromMinutes(-150));

function findMaxNumber(num1, num2, num3, num4) {
    if (typeof(num1) !== 'number' || typeof(num2) !== 'number' || typeof(num3) !== 'number' || typeof(num4) !== 'number') {
        return 0;
    }

    let max = num1;

    if (num2 > max) {
        max = num2;
    }

    if (num3 > max) {
        max = num3;
    }

    if (num4 > max) {
        max = num4;
    }

    return max;
}

console.log(findMaxNumber(1, 5, 6.6, 11));
console.log(findMaxNumber(1, 5, '6', '10'));
