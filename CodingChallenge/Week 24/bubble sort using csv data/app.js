const fs = require("fs");
let newArray = [];

let parse = fileName => {
  fs.readFile(fileName, "utf-8", (err, data) => {
    if (err) {
      return console.log("error reading file");
    }
    data = data.split("\n");

    data.forEach(element => {
      let newdata = element.split(",");
      newArray.push(Array.from(newdata));
    });

    console.log(bubbleSort(newArray));
  });

  let bubbleSort = newArray => {
    for (let i = 1; i < newArray.length ; i++) {
         for (let j = 0; j < newArray.length - i; j++) {
           let num1 = newArray[j][1];
           let num2 = newArray[j + 1][1];
           if (num1 < num2) {
             [newArray[j], newArray[j + 1]] = [newArray[j + 1], newArray[j]];
           }
         }
       }
       return newArray;
    }
};

function main() {
  if (process.argv.length !== 3) {
    console.log("please enter all necessary things.");
  }

  let fileName = process.argv[2];

  parse(fileName);
}

main();