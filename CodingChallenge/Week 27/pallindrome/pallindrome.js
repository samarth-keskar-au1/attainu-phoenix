"use strict";

let isPallindrome = s => {
  return s == s.split("").reverse().join("");
};

let main = () => {
  let input = process.argv[2];
 return  isPallindrome(input);
}

console.log(main());