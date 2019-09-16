"use strict";

function divide(dividend, divisor) {
  let count = 0;
  if (dividend == divisor) return 1;

  let divide = Math.abs(dividend);
  let by = Math.abs(divisor);

  while (by <= divide) {
    divide -= by;
    count++;
  }

  if (dividend < 0 && divisor < 0) {
    count = count;
  } else if (divisor < 0 || dividend < 0) {
    count = -count;
  }

  return count;
}

console.log(divide(6, -3));
