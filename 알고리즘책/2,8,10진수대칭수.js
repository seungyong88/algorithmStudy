function reverse(number) {
  let temp = number.split("").reverse().join("");
  return temp;
}

function solution() {
  var num = 11; // 11q부터 시작하고 2진수의 대칭수는 홀수밖에 없는점을 유의한다.

  while(true){
    if(
      num.toString() === reverse(num.toString()) && 
      num.toString(2) === reverse(num.toString(2)) &&
      num.toString(8) === reverse(num.toString(8))
      ) {
      console.log(num);
      break;
    }

    num += 2;
  }
}



console.log(solution());