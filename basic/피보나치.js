function solution(num) {
  return num===2? num : num *= solution(num-1);
}

console.log(solution(5));