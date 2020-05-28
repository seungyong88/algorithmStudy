function getPrimeNumber(n) {
  const primes = [];
  for (let j = 2; j <= n; j++) {
    let isPrime = true;
    const sqrt = Math.sqrt(j);
    for (let i = 0; primes[i] <= sqrt; i++) {
      if (j % primes[i] === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(j);
    };
  }
  return primes.length;
}

console.log(getPrimeNumber(10));