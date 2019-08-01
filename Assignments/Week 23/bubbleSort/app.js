function getOddNumbers(n) {
  let array = [];
  for (let i = 0; i <= n; i++) {
    if (i % 2 !== 0) {
      array.unshift(i);
    }
  }
  return array;
}

function bubbleSort(arr) {
  for (let i = 0; i <= arr.length; i++) {
    for (let j = 0; j <= arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}

let myArray = getOddNumbers(25);

console.log("before sorting", myArray);

console.log("after sorting", bubbleSort(myArray));
