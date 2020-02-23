function solution(bridge_length, weight, truck_weights) {
  var time = 0;
  let bridge = [];
  //객체로 각 트럭 도착시간 따로 하려다가 걍 이거 구현했는데 효율성도 나쁘지 않음!
  for(let i = 0; i < bridge_length; i ++){ // 트럭 타임 체크 짱좋음★ + 트럭빠지고 바로 입장하기 용이 + 큐 응용
      bridge.push(0);
  }
  let firstWeight = weight
  while(truck_weights.length || weight !== firstWeight){ //트럭은 없지만 다리에 있을 수 있으니. ||
      //빠져야 넣든 말든 결정하니까 선 조건은 빠지는 걸로.

      if(bridge[0]){//다리 맨 앞에 트럭이 있을 때
          weight += bridge.shift() //무게 복구,트럭 탈출
          if(weight >= truck_weights[0]){//빠짐과 동시에 입장
              weight -= truck_weights[0]
              bridge.push(truck_weights.shift())
          }
          else bridge.push(0)
      }

      else{//다리 맨 앞이 0 일 때
          bridge.shift()
          if(weight >= truck_weights[0]){//무게 여유 있으면
              weight -= truck_weights[0]
              bridge.push(truck_weights.shift())
          }//무게 여유 없으면 0 입장
          else bridge.push(0)
      }            
      time++
      
  }
  return time;
}