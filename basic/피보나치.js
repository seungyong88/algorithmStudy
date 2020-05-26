function fetFibonacci(num) {
  let i = 0;
  let value1 = 0;
  let value2 = 1;

  let result = [];

  while(i < num) {
    let newValue = value1+value2;
    
    result.push(newValue);
    value1 = value2;
    value2 = newValue;
    i++;
  }

  return result.toString();
}

console.log(fetFibonacci(8));