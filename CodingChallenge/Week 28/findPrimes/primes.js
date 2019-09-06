function getPrimeNumbers(limit) {

  let isPrime = [];
  let primes = [];

	for (let i = 0; i < limit; i++) {
		i != 0 && i != 1 ? isPrime.push(true) : isPrime.push(false);
	}

	for (let i = 0; i < limit; i++) {
		if (isPrime[i]) {
			for (let j = i + i; j < limit; j += i) {
				isPrime[j] = false;
			}
		}
	}

	for (let i = 0; i < limit; i++) {
		if (isPrime[i]) {
			primes.push(i);
		}
	}

	return primes;
}

  console.log(getPrimeNumbers(100));