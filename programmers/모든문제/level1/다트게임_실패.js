function solution(dartResult) {
  var temp = dartResult.split("");
  var regexp = /^[0-9]*$/
  var answer = [];
  var number = 0;

  if(temp.length == 0) return null;

  while(temp.length) {
    let value = temp.shift();

    if(regexp.test(value)) {
      if(value == 1 && temp[0] == 0){
        // 숫자면서 10일 때
        number = value+temp.shift();
      }else{
        // 숫자지만 10이 아닐 때
        number = value;
      }
    }else{
      // 숫자가 아닐 때
      if(value == "S") {
        answer.push(Math.pow(number, 1));
      } else if(value == "D"){
        answer.push(Math.pow(number, 2));
      } else if(value == "T") {
        answer.push(Math.pow(number, 3));
      }else if(value == "*"){
        answer.push("*2");
      }else if(value == "#"){
        answer[answer.length-1] = answer[answer.length-1]*(-1);
      }
    }
  }

  var s = 0;
  var index =0;

  while(index < answer.length){
    if(answer[index] === "*2") {
      answer[index] = 0;

      for(var j=0; j < index; j++){
        answer[j] = parseInt(answer[j], 10)*2;
      }
    }

    index++;
  }

  console.log(answer);
  
  answer.forEach((item, index) => {
    s += parseInt(item, 10);
  })

  return s;
}

solution("1S2D*3T");
// console.log(solution("1S2D*3T"));
// console.log(solution("1D2S#10S"));
// console.log(solution("1D2S0T"));
console.log(solution("1S*2T*3S"));
// console.log(solution("1D#2S*3S"));
// console.log(solution("1T2D3D#"));
// console.log(solution("1D2S3T*"));