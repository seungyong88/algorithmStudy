function solution(n) {
  var answer = "";
  var array1_2_4 = new Array(4, 1, 2); //3%3 = 0, 1%3 = 1, 2%3 = 2

  while (n) {
    answer = array1_2_4[n % 3] + answer;
    n = Math.floor((n - 1) / 3);
  }

  return answer;
}


// console.log(solution(4));
// console.log(solution(5));
// console.log(solution(6));

console.log(solution(14));
console.log(solution(15));
console.log(solution(16));

// console.log(3/3);