function solution(priorities, location) {
  let answer = 0;
  let queue = priorities.map((item, index) => ({
    item, value: index === location ? true : false,
  }));

  while(true) {
    let printItem = queue.shift(); // dequeue

    if (queue.some(el => el.item > printItem.item)) { // 남아 있는것들 중에 dequeue item 보다 큰 값이 있다면
      queue.push(printItem); // push
    }else{
      answer++;
      if(printItem.value) return answer;
    }
  }
}

// 출처 참고: https://bubobubo003.tistory.com/66

let priorities = [1, 1, 9, 1, 1, 1];
let location = 0;
console.log(solution(priorities, location));