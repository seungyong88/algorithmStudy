
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

console.log(findPrimeNumbers([0,1,1]));