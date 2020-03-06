function solution(a, b) {
  if(a === b){
    return a;
  } else if(a > b) {
    let temp= a;
    a = b;
    b = temp;
  }

  var answer = 0;
  for(let i=a; i <= b; i++) {
    answer += i;
  }
  return answer;

  // 모범 답안
  //  return (a+b)*(Math.abs(b-a)+1)/2;
}

console.log(solution(3, 5));
console.log(solution(3, 3));
console.log(solution(5, 3));
console.log(solution(-3, 3));