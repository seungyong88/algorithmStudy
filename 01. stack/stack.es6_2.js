class Stack {
  constructor(arr = []) {
    this.arr = arr;
    console.log(arr);
  }

  push(data){
    this.arr.push(data);
  }

  pop() {
    return this.arr.pop();
  } 

  print(){
    console.log(this.arr);
  }

  size(){
    return this.arr.length;
  }

  clear() {
    this.arr = [];
  }

  isEmpty() {
    return this.arr.length === 0;
  }
}

let stack = new Stack([1]);
stack.push(2);
stack.push(3);
stack.print();
stack.pop();
stack.print();
console.log(stack.size());
// stack.clear();
console.log(stack.isEmpty());


