function cutbar(n, m){
  var current = 1;
  if(current >= n) {
    return 0 // 잘라내기 완료
  }else if(current < m ){ 
    return 1+ cutbar(n, m, current * 2); // 다음은 현재의 2배가 된다.
  }else{
    return 1+cutbar(n, m, current + m); // 가위 수만큼 추가
  }
}

console.log(cutbar(20, 3));
console.log(cutbar(100, 5));