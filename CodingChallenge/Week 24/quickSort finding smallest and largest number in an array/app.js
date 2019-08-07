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

const largest = arr => {
  return arr[arr.length - 1];
};

const smallest = arr => {
  return arr[0];
};

const main = arr => {
  let sortedArray = quickSort(arr);

  return console.log(
    `sortedArray => ${sortedArray}, smallest number => ${smallest(
      sortedArray
    )}, largest number => ${largest(sortedArray)}`
  );
};

let a = [5, 2, 8, 9, 4, 6];
main(a);
