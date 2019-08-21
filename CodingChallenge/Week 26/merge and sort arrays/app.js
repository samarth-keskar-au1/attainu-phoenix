"use strict";
// Using Merge Sort 

const merge = (a,b) => {

  let merged = [];

  while(a.length && b.length) {
    let smallest;

    if(a[0] < b[0]) {
      smallest = a.shift()
    } else {
      smallest = b.shift();
    }

    merged.push(smallest);
  }

  if(a.length) {
    merged = merged.concat(a);
  }

  if(b.length) {
    merged = merged.concat(b);
  }

  return merged
}

const mainMerge = (a,b) => {
  let sortedArray = merge(a,b);
    return sortedArray;
};

let a = [1,2,3,4,5,6,89,113];
let b = [7,8,9,10,11,12,13,25];

console.log(mainMerge(a,b))

// Using Quick Sort
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

const mainQuick = arr => {
  let sortedArray = quickSort(arr);
    return sortedArray;
};

let c = [1,2,3,4,5,6,89,113];
let d = [7,8,9,10,11,12,13,25];
console.log(mainQuick([...c,...d]));