function solution(n) {
  let number = Math.sqrt(n);
  if(Number.isInteger(number)){
    return Math.pow(number+1,2);
  }else{
    return -1;
  }
}

console.log(solution(121));
console.log(solution(3));
