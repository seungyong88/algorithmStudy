function solution(n){
  var min = Math.min(...n);

  if(n.length <= 1) {
    return [-1];
  }else{
    return n.filter(item => item !== min);
  }
}

console.log(solution([4,3,2,1]));
console.log(solution([5,2,1,3,4]));
console.log(solution([10]));