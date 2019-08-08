"use strict";

const getMaxSubSum = arr => {
  let maxSum = 0;
  let tempSum = 0;

  for (let num of arr) { 
    tempSum += num;
    maxSum = tempSum > maxSum ?  tempSum : maxSum;
    tempSum = tempSum > 0 ? tempSum : 0;
    
  }

  return maxSum;

}

console.log(getMaxSubSum([-1, 2, 4,-3, 5, 2,-5, 2]));
