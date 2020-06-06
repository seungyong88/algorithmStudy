function solution(dartResult) {
  dartResult = dartResult.split("");
  var scores = [];
  var anwser = 0;

  for(var index =0; index < dartResult.length; index++) {
    var item = dartResult[index];
    if(item === "S"){
    
    }else if(item === "D"){
      // 더블일때
      scores[scores.length-1] = scores[scores.length-1] * scores[scores.length-1];
    }else if(item === "T"){
      scores[scores.length-1] = scores[scores.length-1] * scores[scores.length-1] * scores[scores.length-1];
    }else if(item === "*"){
      scores[scores.length-1] = scores[scores.length-1]*2;
      if(scores[scores.length-2]){
        scores[scores.length-2] = scores[scores.length-2]*2;
      }
    }else if(item === "#"){
      scores[scores.length-1] = scores[scores.length-1]*(-1);
    }else {
      // 숫자일 때

      if(item == 1 && dartResult[index+1] == 0) {
        // 10일 때
        scores.push(parseInt(item+dartResult[index+1], 10));
        index++;
      }else{
        scores.push(item);
      }

    }

  }

  scores.forEach(item => anwser += parseInt(item, 10));
  return anwser;
};

// solution("1S2D*3T");
// console.log(solution("1S2D*3T"));
console.log(solution("1D2S#10S"));
// console.log(solution("1D2S0T"));
// console.log(solution("1S*2T*3S"));
// console.log(solution("1D#2S*3S"));
// console.log(solution("1T2D3D#"));
// console.log(solution("1D2S3T*"));
