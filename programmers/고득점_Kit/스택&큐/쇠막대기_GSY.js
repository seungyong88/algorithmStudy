class Stack{
  constructor() {
    this._items = [];
  }

  push(element){
    this._items.push(element);
  }

  pop(){
    return this._items.pop();
  }

  size() {
    return this._items.length;
  }
}

function solution(arrangement) {
  let stack = new Stack();
  let result = 0;
  for(var i = 0; i < arrangement.length; i++) {
    if(arrangement[i] === '(') {
      stack.push(arrangement[i]);
    }else{
      stack.pop(); // 쌍이되면 하나 뺌
      if(arrangement[i-1] === '(') { // 전것이 ( 쌍을 이루는 것이라면 +size
        result = result + stack.size();
      }else{ // 쌍을 이루는 것이 아니라면 +1
        result += 1;
      }
    }
  }
  return result;
}

var arr1 = '()(((()())(())()))(())'; // 17
var arr2 = '(((()())(())()))'; // 15
console.log(solution(arr1));
console.log(solution(arr2));
