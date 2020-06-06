// 피보나치 반복문
function solution(number){
  var one = 1;
  var two = 1;
  var result = 0;
  var arr = [1,1];
  for(var i=arr.length; i< number; i++) {
    result = one+two;
    one = two;
    two = result;

    arr.push(result);
  }

  return [result, arr];
}
console.log(solution(5));
// for(var i =0; i< )