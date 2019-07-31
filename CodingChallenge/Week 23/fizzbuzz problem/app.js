const fizzBuzz = n => {
  for (let i = 1; i <= n; i++) {
    if (i % 5 == 0 && i % 3 == 0) {
      console.log(i, "<= fizzbuzz");
      continue;
    }

    if (i % 5 == 0) {
      console.log(i, "<= buzz");
      continue;
    }

    if (i % 3 == 0) {
      console.log(i, "<= fizz");
      continue;
    }

    console.log(i);
  }
};

fizzBuzz(100);
