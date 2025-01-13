// LESSON 48 WeakMap и WeakSet
"use strict";

// let user = {name: 'Ivan'};

// let map = new WeakMap();
// map.set(user, 'data');

// user = null;

// console.log(map);

let cache = new WeakMap();

function cacheUser(user) {
    if (!cache.has(user)) {
        cache.set(user, Date.now());
    }
    return cache.get(user);
}

let Lena = {name: 'Elena'};
let Alex = {name: 'Alex'};

cacheUser(Lena);
cacheUser(Alex);

Lena = null;

// console.log(cache.has(Lena));
// console.log(cache.has(Alex));

//WeakSet
// поддерживает add, has, delete

let messages = [
    {text: 'Hello', from: 'John'},
    {text: 'World', from: 'Alex'},
    {text: '....', from: 'M'}
];

let readMessages = new WeakSet();

readMessages.add(messages[0]);
// readMessages.add(messages[1]);

readMessages.add(messages[0]);
messages.shift();
console.log(readMessages.has(messages[0]));

