"use strict"

function calculateVolumeAndArea(num) {
    if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
        return 'При вычислении произошла ошибка';
    }
    let volume = 0,
        area = 0;

    volume = num * num * num;
    area = 6 * (num * num);
    return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
}

console.log(calculateVolumeAndArea(5));
console.log(calculateVolumeAndArea(15));
console.log(calculateVolumeAndArea(15.5));
console.log(calculateVolumeAndArea('15'));
console.log(calculateVolumeAndArea(-15));

function getCoupeNumber(num) {
    if (typeof(num) !== 'number' || num < 0 || !Number.isInteger(num)) {
        return 'Ошибка. Проверьте правильность введенного номера места';
    }
    
    if (num === 0 || num > 36) {
        return 'Таких мест в вагоне не существует'
    }

    return Math.ceil(num / 4);
}

console.log(getCoupeNumber(33));
console.log(getCoupeNumber(7));
console.log(getCoupeNumber(300));
console.log(getCoupeNumber(0));
console.log(getCoupeNumber(7.7));
console.log(getCoupeNumber(-10));
console.log(getCoupeNumber('Hello'));