const fizzBuzz = n => {
  for (let i = 1; i <= n; i++) {
    if (i % 5 == 0 && i % 3 == 0) {
      console.log("FizzBuzz");
      continue;
    }

    if (i % 5 == 0) {
      console.log("Buzz");
      continue;
    }

    if (i % 3 == 0) {
      console.log("Fizz");
      continue;
    }

    console.log(i);
  }
};

fizzBuzz(100);
