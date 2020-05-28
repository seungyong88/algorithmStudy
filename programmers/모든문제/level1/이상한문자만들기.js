function solution(s) {
  let anwser = '';
  let i =0, j =0;
  while(i < s.length) {
    console.log('dddd', s[i]);
    if(s[i] === " ") {
      anwser += " ";
      j=0; i++;
    }else{
      if(j % 2 === 0) { // 짝수일때
        anwser += s[i].toUpperCase();
      }else{ // 홀수일때
        anwser += s[i].toLowerCase();
      }

      i++; j++;
    }
  }
  
  return anwser;
}

console.log(solution("try             hello world"));