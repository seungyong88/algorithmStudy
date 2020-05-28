function solution(strings, n) {
  strings.sort(function(a,b){
      var first = a[n];
      var second = b[n];
      if(first === second){
        return (a > b) - (a < b);
      }else{
        return (first > second) - (first < second); 
      }
  })
  return strings;
}

console.log(solution(["sun", "bed", "car"], 1));
console.log(solution(["abcd", "abce", "cdx"], 2));