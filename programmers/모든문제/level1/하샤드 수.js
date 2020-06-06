function solution(number) {
  var newNumber = 0;
  String(number).split("").forEach(item => newNumber += parseInt(item, 10));
  return number%newNumber === 0;
}

console.log(solution(12));
console.log(solution(11));
console.log(solution(13));