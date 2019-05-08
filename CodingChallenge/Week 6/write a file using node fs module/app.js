"use strict";
let fs = require("fs");
let messageWriter = (fileName, msg, n) => {
  let data = "";
  for (let i = 0; i < n; i++) {
    data = data + msg;
  }
  fs.writeFile(fileName, data, err => {
    if (err) throw err;
    console.log("File has been written successfully");
  });
};

messageWriter("hello.txt", "Welcome to AttainU\n", 50);
