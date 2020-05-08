function sumPrimes(num) {
  let result = 0;
  let s = 2;

  while (s <= num) {
    if (isPrime(s)) {
      console.log(s);
      result += s;
    }
    s++;
  }

  console.log(result);
  return result;

  function isPrime(number) {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) return false;
    }
    return true;
  }
}

sumPrimes(977);
