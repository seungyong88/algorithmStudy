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

let stack = new Stack([1]);
stack.push(2);
stack.push(3);
stack.print();
stack.pop();
stack.print();
console.log(stack.size());
stack.clear();
console.log(stack.isEmpty());
