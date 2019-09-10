"use strict";

let reverse = x => {
  var INT_MAX = 2147483647;
  var INT_MIN = -INT_MAX - 1;
  var res = 0;
  while (x !== 0) {
    res = res * 10 + (x % 10);
    x = x > 0 ? Math.floor(x / 10) : Math.ceil(x / 10);
    if (res > INT_MAX || res < INT_MIN) return 0;
  }
  return res;
};

console.log(reverse(-128530));
