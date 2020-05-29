function solution(n) {
 var sortNumber = String(n).split("").sort(function (a,b) {
   return b-a;
 }).join('');

 return parseInt(sortNumber, 10);
}


console.log(solution(118372));