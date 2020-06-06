function solution(a, b) {
  if(a === b) return a;

  var result = 0; 

  for(var i = Math.min(a,b); i <= Math.max(a,b); i++ ) {
    result += i;
  }
  
  return result;
}

console.log(solution(3,5));
console.log(solution( 10, -10));
console.log(solution( -10, 10));
// // console.log(solution(3,3));