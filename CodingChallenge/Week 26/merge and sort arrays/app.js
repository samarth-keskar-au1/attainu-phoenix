"use strict";

const quickSort = arr => {
  if (arr.length <= 1) {
    return arr;
  }

  let left = [],
    right = [],
    pivot = arr.shift(),
    center = [pivot];

  while (arr.length) {
    let currentElement = arr.shift();

    currentElement == pivot
      ? center.push(currentElement)
      : currentElement > pivot
      ? right.push(currentElement)
      : currentElement < pivot
      ? left.push(currentElement)
      : "";
  }

  return quickSort(left).concat(center, quickSort(right));
};

const main = arr => {
  let sortedArray = quickSort(arr);
    return sortedArray;
};

let a = [5, 2, 8, 9, 4, 6];
let b = [1,7,96,87,63,78,8];
console.log(main([...b,...a]));