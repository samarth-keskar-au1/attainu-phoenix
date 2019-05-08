"use strict";

let array1 = [1, 2, 3, 4];
let array2 = [1, 2, 5, 4];

document.getElementById("array1").innerText = array1;
document.getElementById("array2").innerText = array2;
let result = document.getElementById("result");

let arrayCompare = function (a, b) {
  if (a.lenth != b.lenth) {
    return result.innerText = "values of the arrays are not similar";
  } else {
    for (let i = 0; i <= a.length; i++) {
      if (a[i] != b[i]) {
        return result.innerText = "values of the arrays are not similar";
      }
    }
  }
  return result.innerText = "values of the arrays are similar";
};
arrayCompare(array1, array2);