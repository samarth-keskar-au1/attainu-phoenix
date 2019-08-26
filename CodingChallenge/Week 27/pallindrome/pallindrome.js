"use strict";

let isPallindrome = s => s == s.split("").reverse().join("");

let main = () => process.argv.length <= 2 ? "Enter The Strings" : isPallindrome(process.argv[2]);

console.log(main());