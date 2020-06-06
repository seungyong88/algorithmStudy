function solution(num) {
  var value = 1;
  for(var i=2; i<=num; i++) {
    value *= i;
  }

  return value;
}

console.log(solution(5))