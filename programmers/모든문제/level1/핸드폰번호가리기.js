function solution(phone_number) {
  var answer = phone_number.substring(phone_number.length-4, phone_number.length);
  return "*".repeat(phone_number.length-4)+answer;
}

console.log(solution("01033334444"));
console.log(solution("027787888"));
