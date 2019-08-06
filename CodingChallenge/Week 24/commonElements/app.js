"use strict";

const commonElements = (a,b) => {
 let counter = 0;
  for (let i = 0; i < a.length; i++) {
      if(b.includes(a[i])) {
        counter+= 1;
      }
  }

  return counter;
}


let a =[5,2,8,9,4];
let b = [3,2,9,5];
console.log(commonElements(a,b));