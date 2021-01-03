class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
 
}

class Stack{
  constructor() {
    this.head = null;
    this.length = null;
    this.top = null;
  }
  
  push(item) {
    var t = new Node(item);
    t.next = this.top;
    this.top = t;
  }

  pop() {
    if(this.top == null) {
      console.log('비었음');
      return;
    }

    var item = this.top.data;
    this.top = this.top.next;
    return item;
  }  

  peek() {
    if (this.top == null) {
      console.log('비었음');
      return;
    }

    console.log(this.top.data);
  }

  isEmpty() {
    console.log(this.top === null);
  }
}

var stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.peek();
stack.pop();
stack.pop();
stack.isEmpty();
stack.pop();
stack.isEmpty();