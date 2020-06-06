// 피보나치 반복문
function solution(number){
  var one = 1;
  var two = 1;
  var result = 0;
  var arr = [1,1];
  for(var i=2; i<= number; i++) {
    result = one+two;
    one = two;
    two = result;

    arr.push(result);
  }

  console.log(arr);
  return result%1000000007;
}
console.log(solution(5));
// for(var i =0; i< )
console.log(solution(4));


// def solution(n):
//     value1, value2 = 1, 1
//     for i in range(n):
//         value1, value2 = value2, value1+value2
//     return value1%1000000007
