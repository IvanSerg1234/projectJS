'use strict';

const films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];

function showGoodFilms(arr) {
   return arr.filter(item => item.rating >= 7);
}

function showListOfFilms(arr) {
    return arr.reduce((sum, current) => `${typeof(sum) === 'object' ? sum.name : sum}, ${current.name}`);
}

console.log(showListOfFilms(films));

function setFilmsIds(arr) {
    return arr.map((item, index) => {
        item.id = index;
        return item;
    })
}

const tranformedArray = setFilmsIds(films);

console.log(tranformedArray);

function checkFilms(arr) {
    return arr.every(item => item.id !== undefined);
}

console.log(checkFilms(tranformedArray));