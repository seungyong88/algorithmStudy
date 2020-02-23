/**
 * 1. 대기중인 트럭이 없는지 확인한다.
 * 2. 다리에 지나고 있는 트럭이 없는지 확인한다.
 * 3. 1,2 번이 true 경우 answer를 return 한다.
 * 4. 대기중인 트럭이 있으면 shift 해서. 다리를 건넌다.
 * 5. 다리에 트럭이 없으면 shith 한 트럭이 건넌다.
 * 6. 다리에 건너는 트럭이 있으면 대기중인 다음 트럭과 weight를 넘지 않는지 검사한다.
 * 7. 대기중인 트럭과 weight를 넘지 않으면 다리에 트럭을 추가한다.
 */

function solution(bridge_length, weight, truck_weights) {
  var answer = 0;
  var bridge = [];
  var queue = truck_weights.map(v => ({weight: v, value: 0}));

  while(true) {
    if(queue.length === 0 && bridge.length === 0) { break; } // {1}, {2}, {3} 
    if(bridge.length !== 0) { // 다리에 지나가는 트럭이 있으면 
      // 1. 무게를 검사한다. 다리에있는트럭무게+다음것
      // 2. 무게를 넘지 않으면 트럭을 추가해서 전진
      // 3. 무게를 넘으면 있는것만 전진
      let current_weight = 0; // 다리에 있는 트럭무게
      for(var i=0; i<bridge.length; i++) {
        current_weight += bridge[i].weight;
      }

      let next_truck_weight = queue.length === 0? 0: queue[0].weight;

      if(current_weight+next_truck_weight <= weight) { 
        if(next_truck_weight) bridge.push(queue.shift());
      }

      answer += 1;
    }else{ // 지나가는 트럭이 없으면
      bridge.push(queue.shift());
      answer += 1;
    }

    bridge = bridge.filter(item => {
      item.value += 1;
      return item.value < bridge_length;
    });
  }
  return answer+1;
}

//8
// var bridge_length = 2;
// var weight = 10;
// var truck_weights = [7,4,5,6];

// 101
// var bridge_length = 100;
// var weight = 100;
// var truck_weights = [10];

// 110
var bridge_length = 100;
var weight = 100;
var truck_weights = [10,10,10,10,10,10,10,10,10,10];

console.log('anwser :', solution(bridge_length, weight, truck_weights));