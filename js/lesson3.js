// LESSON 3 25.12.24 Разница между масивами и обьектами

// Масив - частный случай обьекта
const arr = ['a', 'b', 'c'];

arr[10] = '3456';

console.log(arr);

const arrObj = {
    a: 'a',
    '1': 'b',
    2: 'c',
    abc: {
        df: [{}, {}],
        def: {
            
        }
    }
};
const b = 'b';

// arrObj.b = '1234';
arrObj['b'] = '1234';
arrObj[b] = '1234';

console.log(arrObj['b']);
console.log(arrObj.b);

// const obj = {a: 1, b: 2};
const obj = {
    'Anna': 500,
    'Alice': 800
};

// TASK 2
const storeName = "ATB";
const storeDescription = {
    budget: 10000,
    employees: ["Sasha", "Vanya", "Borya"],
    products: {
        Milk: 20,
        Bread: 10
    },
    open: true
}