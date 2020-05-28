function solution(arr, divisor) {
  var answer= [];
  arr.forEach(item => {
    if(item%divisor === 0) {
      answer.push(item);
    }
  });

  if(answer.length === 0) {
    answer.push(-1);
  }

  answer.sort(function(a, b) { // 오름차순
    return a - b;
    // 1, 2, 3, 4, 10, 11
  });
  return answer;
}

console.log(solution([5,9,7,10], 5));
console.log(solution([2, 36, 1, 3], 1));
console.log(solution([3, 2, 6], 19));