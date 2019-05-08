"use strict";

let starCreator = function(n) {
  for (let i = 1; i <= n; i++) {
    let star = "";
    for (let j = 1; j <= i; j++) {
      star = star + "*";
    }
    console.log(star);
  }

  for (let i = n; i >= 1; i--) {
    let star = "";
    for (let j = 1; j <= i; j++) {
      star = star + "*";
    }
    console.log(star);
  }
};

starCreator(5);
