"use strict";

let fiboArray = [0, 1];
let fibo = function(n) {
  let a = 0,
    b = 1,
    f = 1;
  for (let i = 2; i <= n; i++) {
    f = a + b;
    a = b;
    b = f;
    fiboArray.push(f);
  }
};

fibo(30);

console.log(fiboArray);
