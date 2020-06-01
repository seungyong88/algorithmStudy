function solution(dartResult) {
  var temp = dartResult.split("");
  var answerMap = new Map();
  var answer = 0;
  var regexp = /^[0-9]*$/;
  var preValue = '';
  if(temp.length == 0) return null;

  while(temp.length) {
    var value = temp.shift();

    if(regexp.test(value)) {
      
      if(value == 1 && temp[0] == 0){
        // 숫자면서 10일 때
        value = parseInt((value +temp.shift()), 10);
      }

      if(!answerMap.get(value)) {
        answerMap.set(value, []);
      }

      preValue=value;
    }else{
      var number = null;
      if(answerMap.get(preValue)) {
        number = answerMap.get(preValue);
      }

      if(value == "*"){
        answerMap.forEach((value, key, index) => {
          value.push("*");
        })
      }else{
        number.push(value);
      }

    }
  }
  
  answerMap.forEach((value, key, index) => {
    var result = parseInt(key, 10);
    
    value.forEach((item, i) => {
      if(item === "S") {
        result = parseInt(Math.pow(result, 1), 10);
      }else if(item === "D") {
        result = parseInt(Math.pow(result, 2), 10);
      }else if(item === "T") {
        result = parseInt(Math.pow(result, 3), 10);
      }else if(item === "*") {
        result = result*2;
      }
      
      if(item === "#") {
        result = result*(-1);
      }
    })

    answer += result;

  })
  console.log(answerMap);
  return answer;
}

// solution("1S2D*3T");
// console.log(solution("1S2D*3T"));
console.log(solution("1D2S#10S"));
// console.log(solution("1D2S0T"));
// console.log(solution("1S*2T*3S"));
// console.log(solution("1D#2S*3S"));
// console.log(solution("1T2D3D#"));
console.log(solution("1D2S3T*"));