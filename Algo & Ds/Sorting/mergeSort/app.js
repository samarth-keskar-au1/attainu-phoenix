"use strict";

const fs = require("fs");

const readFile = (fileName, callback) => {
  fs.readFile(fileName, "utf-8", (err,data) => {
  	if(err) {return console.log("error reading file");}
  	let array = data.trim().split("\n");
  	console.log(mergeSort(array));
  }); 
};

const merge = (left, right) => {
    let merged = [];
   
   while (left.length && right.length) {
     let smallest;

     if(left[0].split(",")[1] > right[0].split(",")[1]) {
      smallest = left.shift();
     } else {
      smallest = right.shift();
     }

     merged.push(smallest);
   }


   if(left.length) {
    merged = merged.concat(left);
   }

   if (right.length) {
    merged = merged.concat(right);
   }

   return merged;

  };

 const mergeSort = array => {
   
   if(array.length === 1) {return array;}
   let middle = Math.floor(array.length / 2);
   let left = array.slice(0, middle);
   let right = array.slice(middle, array.length);

   return merge(mergeSort(left),mergeSort(right));
  };


const main = () =>  readFile("file.csv", mergeSort);


main();
