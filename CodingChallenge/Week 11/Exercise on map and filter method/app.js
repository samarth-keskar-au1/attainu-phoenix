// functional way

let numbers = [4, 28, 43, 34, 37, 41, 26, 49, 33, 19, 36, 25, 47, 20, 1, 45, 6, 5, 27, 48];

let filteredSq = numbers.filter(num => num % 2 == 0).map(num => num * num);

console.log(filteredSq);


// Imperative Way

let evenSq = [];

for (let i = 0; i< numbers.length; i++) {
 if(numbers[i]%2 == 0) {
     evenSq.push(numbers[i]*numbers[i]);
 }
};

console.log(evenSq);




