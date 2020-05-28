function solution(n) {
  return String(n).split("").reverse().map(item => parseInt(item, 10));
}

console.log(solution(12345));