"use strict";

let starCreator = function(n) {
  let star = "";
  for (let i = 0; i < n; i++) {
    star = star + "*";
    console.log(star);
  }

  let star2 = star;
  for (let i = n; i > 0; i--) {
    star2 = star2 - "*";
    console.log(star2);
  }
};

starCreator(7);
