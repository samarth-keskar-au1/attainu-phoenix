"use strict";

const findMissing = arr => {
  let array = [];
  for (let i = 1; i < arr.length; i++) {
    if (!arr.includes(i)) {
      array.push(i);
    }
  }
  return array;
};

console.log(findMissing([1, 2, 4, 5, 6]));
console.log(findMissing([1, 2, 3, 4, 5, 6, 7, 9, 11, 12, 13, 14, 15]));
