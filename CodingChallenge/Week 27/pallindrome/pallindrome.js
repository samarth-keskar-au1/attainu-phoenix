"use strict";

let isPallindrome = s => s == s.split("").reverse().join("");

console.log(isPallindrome("madam"));
console.log(isPallindrome("madame"));

