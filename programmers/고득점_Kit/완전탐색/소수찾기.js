function solution(numbers) {
  const numberList = numbers.split('');
  // [0, 1, 1]
  const answers = findPrimeNumbers(numberList); // 숫자 만드는 로직

  return [...new Set(answers)].length;
}

function findPrimeNumbers(numberList, prevNumber) {
  const frontPaddingNumber = prevNumber || '';

  return numberList.reduce((primeNumbers, number, index) => {
    if (isPrimeNumber(Number(frontPaddingNumber + number))) {
      primeNumbers.push(Number(frontPaddingNumber + number));
    }

    const nextNumberList = [...numberList];
    nextNumberList.splice(index, 1);

    const result = findPrimeNumbers(
      nextNumberList,
      frontPaddingNumber + number,
    );
    primeNumbers.push(...result);

    return primeNumbers;
  }, []);
}

function isPrimeNumber(number) {
  const notPrime = [0, 1];
  if (notPrime.includes(number)) return false;

  for (let i = 2; i * i <= number; i++) {
    if (number % i === 0) return false;
  }

  return true;
}
console.log(solution("17"));
console.log(solution("011"));
