function solution(n, m) {
  var answer = [];
  var minNumber = Math.min(n, m);
  var maxNumber = Math.max(n, m);
  answer[0] = gcd(minNumber, maxNumber);
  answer[1] = lcm(minNumber, maxNumber);
  return answer;
}

// 최대 공약수
function gcd(minNum, maxNum) {
  return (minNum % maxNum)  === 0 ? maxNum: gcd(maxNum, minNum % maxNum);
}

// 최소 공배수
function lcm(minNum, maxNum) {
  return minNum*maxNum/gcd(minNum, maxNum);
}

console.log(solution(3, 12));