"use strict";
let previous = 0;
const removeDuplicates = arr => {
    let array = [];
 for (let i = 0; i < arr.length; i++) {
     if(arr[i] == previous) {
        continue;
     }
        previous = arr[i];
        array.push(arr[i]);
 }
 return array;
}


console.log(removeDuplicates([1, 2, 2, 3, 4, 5, 6, 6, 7]));

//  Using set data structure

const removeDuplicates2 = arr => Array.from(new Set(arr));

console.log(removeDuplicates2([1, 2, 2, 3, 4, 5, 6, 6, 7]));

