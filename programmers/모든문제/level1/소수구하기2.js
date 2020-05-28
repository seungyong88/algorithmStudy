function numberOfPrime(n) {
  var result = 0;
  for(var i=2;i<=n;i++){
    for(var j=2;j<i;j++){
      if(i%j==0) break;
      if(i==j+1) result++;
    }
  }
  return result+1; //n이 1이상의 정수라는 가정하에
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( numberOfPrime(10) )