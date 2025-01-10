// LESSON 41 Map
'use strict';

// Карта это массив с массивами внутри
// У карт ключи могут быть какие угодные (строки, объекты, функции и т.д.)
// У обьектов ключами могут быть только строки
// У карт порядок обьектов четкий как мы их добавляем, в обьектах не так
// При создании пустой карты в ней ничего не будет, в пустом обьекте будет что то
// Карты легко перебирать, с обьектами не так все просто
// Размер карты легко получить через .size, а у обьекта через Object.keys().length

const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1993',
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
}

const userMap = new Map(Object.entries(user)); // Преобразование объекта в Map

const newUserObj = Object.fromEntries(userMap); // Преобразование Map в объект
console.log(newUserObj);

const shops = [
    {rice: 500},
    {oil: 200},
    {bread: 50}
];

const budget = [5000, 15000, 25000];

const map = new Map([
    [{paper: 400}, 8000]
]);

shops.forEach((shop, i) => {
    map.set(shop, budget[i]);
})

// map.set(shops[0], 5000)
//    .set(shops[1], 15000)
//    .set(shops[2], 25000);

console.log(map);
// console.log(map.get(shops[0]));
// console.log(map.has(shops[0]));
// map.delete(key);
// map.clear();
// map.size;
// map.keys();

// const goods =[];
// for (let shop of map.keys()) {
//     goods.push(Object.keys(shop)[0]);
// }
// console.log(goods);

// for (let price of map.values()) {
//     console.log(price);
// }

// for (let [shop, price] of map.entries()) {
//     console.log(price, shop);
// }

// map.forEach((value, key, map) => {
//     console.log(value, key);
// })