function solution(numbers, target) {
  var answer = 0;
// 처음 시작은 개수 0개, 합계 0 으로 시작하면서 모든 경우를 dfs로 탐색
  recur(0, 0);
  return answer;

  function recur(count, sum){
    // leaf node 도착했을 때, 모든 numbers 탐색
      if( count === numbers.length){
        // 주어진 조건에 만족하면 answer++
          if(sum ===target ){
              answer++
          }
        // 리턴해주어야함
          return
      }

    // left child 는 +일 경우
      recur(count+1, sum+numbers[count]);
    // right child 는 -일 경우
      recur(count+1, sum-numbers[count]);
  }
}


console.log(solution([1, 1, 1, 1, 1] ,3));

