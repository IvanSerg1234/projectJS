// Task 1
for (let i = 5; i <= 10; i++) {
    console.log(i);
}

// Task 2
function secondTask() {
for (let i = 20; i >= 10; i--) {
    console.log(i);
    if (i === 13) break;
}
}

// Task 3
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Task 4

for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

let i = 2;
while (i < 16) {
    i++;
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

// Task 5
const arr = [];
for (let i = 5; i < 11; i++) {
    arr[i - 5] = i
}
console.log(arr);
return arr;