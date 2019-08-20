"use strict";
const  getStringPermutations = string  => {
    let results = [];

    if (string.length === 1) {
      results.push(string);
      return results;
    }
  
    for (let i = 0; i < string.length; i++) {
      let firstChar = string[i];
      let charsLeft = string.substring(0, i) + string.substring(i + 1);
      let internalPermutations = getStringPermutations(charsLeft);
      for (let j = 0; j < internalPermutations.length; j++) {
        results.push(firstChar + internalPermutations[j]);
      }
    }
    return results;
  }

  console.log(getStringPermutations("abc"));