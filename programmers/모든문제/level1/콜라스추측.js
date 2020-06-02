function solution(n) {
  var count = 0;
  var anwser = 0;

  while(n !== 1){
    if(count >= 500) {
      anwser = -1;
      break;
    }

    if(n%2 ===0) {
     // 짝수일떄 
     n = n/2;
     anwser++;
    }else{
     n = n*3+1;
     anwser++;
    }

    count++;
  }

  return anwser;
}

console.log(solution(6));
console.log(solution(16));
// console.log(solution(626331));