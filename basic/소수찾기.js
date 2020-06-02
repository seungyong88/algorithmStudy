function solution(number) {
  var anwser = new Array(number+1).fill(0);
  anwser[0] = null;
  anwser[1] = null;

  for(var i =2; i <= number; i++){
    if(anwser[i] == null) continue;
    for(var j=i+i; j <= number; j += i){
      anwser[j] = null;
    }
  }
1
  return anwser.filter(item => item !== null).length;
}

console.log(solution(10));
console.log(solution(5));
console.log(solution(100000));