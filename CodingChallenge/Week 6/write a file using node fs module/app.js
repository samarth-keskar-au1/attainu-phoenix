"use strict";
let fs = require("fs");
let messageWriter = (fileName, msg, n) => {
  for (let i = 0; i <= n; i++) {
    fs.writeFile(fileName, msg, err => {
      if (err) {
        throw err;
      }
      console.log(msg);
    });
  }
};

messageWriter("hello.txt", "Welcome to AttainU\n", 50);
