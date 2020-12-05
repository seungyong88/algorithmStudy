//es6
class Stack {
  constructor(arr = []){
    this._items = arr;
  }

  push(element){
    this._items.push(element);
  }

  pop(){
    return this._items.pop();
  }

  peek(){
    return this._items[this._items.length - 1];
  }

  isEmpty() {
    return this._items.length === 0;
  }

  size() {
    return this._items.length;
  }

  clear() {
    this._items = [];
  }

  print(){
    console.log(this._items.toString());
  }
}

function divideBy2(decNumber){
  let remStack = new Stack(); // 스택 생성
  let rem; // 나머지 변수
  let binaryString = ''; // 리턴 변수

  while (decNumber > 0){ // {1} 0보다 클때까지
    rem = Math.floor(decNumber % 2) // {2} // 2로 나누어
    remStack.push(rem); // {3} 나머지는 스택에 넣고
    decNumber = Math.floor(decNumber /2); // {4} 구하는 수 갱신
  }

 while(!remStack.isEmpty()) { // {5} // 빈배열이 아닌지 확인하고 순회하여 리턴값 추출
  binaryString += remStack.pop().toString();
 } 

 return binaryString; // 추출
}

console.log(divideBy2(122)); // 1111010