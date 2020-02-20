function solution(progresses, speeds) {
  let answer = [];
  let count = 0;

  while (progresses.length) {
    for (let i = 0; i < progresses.length; i++) {
      progresses[i] += speeds[i];
    }

    if (progresses[0] >= 100) {
      for (let i = 0; i < progresses.length; i++) {
        if (progresses[i] >= 100) {
          count++;
        } else {
          break;
        }
      }

      progresses.splice(0, count);
      speeds.splice(0, count);
      answer.push(count);
      count=0;
    }
  }

  return answer;
}


//progresses	speeds	return
//[93,30,55]	[1,30,5]	[2,1]
let progresses = [93, 30, 55];
let speeds = [1, 30, 5];

console.log(solution(progresses, speeds));