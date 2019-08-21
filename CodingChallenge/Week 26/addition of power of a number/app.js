"use strict";

function sumOfPower(number, power) {
  
  let powerOfNum = BigInt(Math.pow(number, power));

  let sum = 0;

  powerOfNum
    .toString()
    .split("")
    .forEach(n => (sum += parseInt(n)));

  return sum;
}

console.log(sumOfPower(2, 1000));
