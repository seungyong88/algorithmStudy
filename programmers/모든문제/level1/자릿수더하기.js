function solution(n) {
  var answer = 0;
  String(n).split("").forEach(item => answer += parseInt(item));
  return answer;
}

console.log(solution(123));