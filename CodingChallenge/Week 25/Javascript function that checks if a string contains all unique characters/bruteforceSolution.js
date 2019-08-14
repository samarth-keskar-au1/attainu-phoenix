"use strict";

let isDuplicateCharacters = array => {
  let set = new Set(array);
  array.length != set.size ? false : true;
};

let name = Array.from("arkesh");

console.log(isDuplicateCharacters(name));
