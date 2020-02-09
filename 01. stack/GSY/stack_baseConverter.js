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

function baseConverter(decNumber, base){
  let remStack = new Stack();
  let rem;
  let binaryString = '';
  let digits = '0123456789ABCDEF'; // {6} base에 맞는 진법을 뽑아내기 위한 문자열

  while (decNumber > 0){ // {1}
    rem = Math.floor(decNumber % base) // {2}
    remStack.push(rem); // {3}
    decNumber = Math.floor(decNumber / base); // {4}
  }

 while(!remStack.isEmpty()) { // {5}
  // binaryString += remStack.pop().toString();
  binaryString += digits[remStack.pop()]; // {7} 숫자를 리턴하면 digits에서 해당되는 진법을 뽑아온다.
} 

 return binaryString;
}

console.log(baseConverter(122,2)); // 1111010
console.log(baseConverter(122,8)); // 172
console.log(baseConverter(122,16)); // 7A