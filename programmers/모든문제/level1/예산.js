function solution(d, budget) {
  var anwser = 0;
  d = d.sort(function (a,b) {
    return a-b;
  });

  d.forEach(item => {
    if(budget-item >= 0) {
      budget = budget-item;
      anwser++;
    }
  })

  return anwser;
}

console.log(solution([1,3,2,5,4], 9));
console.log(solution([1,3,2,5,4,2,1,5,1], 11));
console.log(solution([2,2,3,3], 10));
