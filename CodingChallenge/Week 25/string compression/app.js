const frequency = arr => {
  let array = [];
  arr.forEach(element => (array[element] = array[element] ? array[element] + 1 : 1));
  return array;
};
let array = Array.from("AAABCCDDDD");
let frequencyOfChars = frequency(array);

const joinArray = arr => {
  let str="";
  for (key in arr) { arr[key] == 1 ? str += key :  str += (key + arr[key]);}
  return str;
};

console.log(joinArray(frequencyOfChars));
