function solution(answers) {
  let answer = [0,0,0];

  let arr1 = [1, 2, 3, 4, 5];
  let arr2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let arr3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  answers.forEach((element,index) => {
    element === arr1[index % arr1.length] ? answer[0] += 1: 0; 
    element === arr2[index % arr2.length] ? answer[1] += 1: 0; 
    element === arr3[index % arr3.length] ? answer[2] += 1: 0; 
  })

  let maxValue = Math.max.apply(null, answer);
  let ttt = answer.map((item, index) => {
    if(maxValue === item) { return index+1 }
  }).sort();

  return ttt.filter(item => item);
}


let answer1 = [1,2,3,4,5]	// [1]
let answer2 = [1,3,2,4,2]	// [1,2,3]

console.log(solution(answer1));
console.log(solution(answer2));


// 1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
// 2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5,  2, 1, 2, 3, 2, 4, 2, 5, ...
// 3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...
