"use strict";

const findMissing = arr => {
  let array = [];
  if(arr.length < 1) {
    console.log("length of the array should be greater than 1");
    return null;
  }
  for (let i = 1; i <  arr[arr.length - 1]; i++) {
    if (!arr.includes(i)) {
      array.push(i);
    }
  }
  return array;
};

console.log(findMissing([1, 2, 4, 5, 6]));
console.log(findMissing([1, 2, 3, 4, 5, 6, 7, 9, 11, 12, 13, 14, 15]));
