function solution(number) {
  if(number === 1){
    return 1;
  } else if (number ===2) {
    return 1;
  }else{
    return solution(number -1) + solution(number -2);
  }

}


console.log(solution(5));