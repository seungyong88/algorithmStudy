function solution(arrangement){
  let answer = 0;
  let ironStack = 0;
  let arr = arrangement.split("");
  let open = true;
  while(arr.length){
      if(arr.pop() === ")"){ //pop이라 뒤에서 진행 결과는 같음
          ironStack ++
          open = true // 연다!
      }
      else{ //arr.pop() === "("
          if(open){ // 열고 닫는 거임 = 레이저임
              ironStack -- // ironStack 한개는 레이저를 만들기 위한거였어서 한개 뺴주고!
              answer += ironStack
              open = false
          }
          else{ // 닫힌건데 닫는 거임 = 막대기 한개 탈출
              answer ++
              ironStack --
              open = false
          }
      }
  }
  return answer; //open,ironStack을 stack개념으로 묶을 수 있을 것 같은뎅...
}