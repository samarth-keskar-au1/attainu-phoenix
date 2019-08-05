"use strict";
const fs = require("fs");

let readFile = (fileName, callback) => {
  fs.readFile(fileName, "utf-8", callback);
};

let sortData = (err, data) => {
  if (err) {
    return console.log("error reading file");
  }

  let csv = data.trim().split("\n");

  for (let i = 0; i < csv.length; i++) {
    for (let j = 0; j < csv.length - i; j++) {
      let num1 = parseFloat(csv[j].split(",")[1]);
      let num2 = csv[j + 1] ? parseFloat(csv[j + 1].split(",")[1]) : "";

      if (num1 < num2) {
        [csv[j], csv[j + 1]] = [csv[j + 1], csv[j]];
      }
    }
  }
  printData(csv);
};

let printData = data => {
  console.log(data);
};

function main() {
  readFile("file.csv", sortData);
}

main();
