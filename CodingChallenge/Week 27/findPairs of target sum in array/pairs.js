"use strict";
let findPairs = (array, target) => {
  let tmp = {},
    results = [];

  for (let i = 0; i < array.length; i++) {
    tmp[array[i]]
      ? results.push([tmp[array[i]], array[i]])
      : (tmp[target - array[i]] = array[i]);
  }
  return results;
};
console.log(findPairs([1, 2, 4, 5, 6, 10, 12], 10));
