'use strict';

// First way
function isPangram(string) {
    string = string.toLowerCase();
    return "abcdefghijklmnopqrstuvwxyz".split('').every(function (x) {
        return string.indexOf(x) !== -1;
    });
}

console.log(isPangram('The quick brown fox jumps over the lazy dog'));

// Second way
function isPangram2(string) {
    return 'abcdefghijklmnopqrstuvwxyz'
        .split('')
        .every((x) => string.toLowerCase().includes(x));
}

console.log(isPangram2('The quick brown fox jumps over the lazy dog'));

// Third way
function isPangram3(str) {
    letters: for (var c = 0; c < 26; c++) {
        for (let i = 0; i < str.length; i++) {
            let s = str.charCodeAt(i)
            if (s < 65 || s > 90 && s < 97 || s > 122) continue
            if (s === 65 + c || s === 97 + c) continue letters
        }

        return false
    }

    return true
}

console.log(isPangram3('The quick brown fox jumps over the lazy dog'));

// Fourth way
function isPangram4(string) {
    return new Set(string.toLowerCase().replace(/[^a-z]/gi, '').split('')).size === 26;
}

console.log(isPangram4('The quick brown fox jumps over the lazy dog'));

// Fifth way
function isPangram5(string) {
    return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
}

console.log(isPangram5('The quick brown fox jumps over the lazy dog'));