class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(element) {
    let node = new Node(element), current;

    if(this.isEmpty()) {
      this.head = node;
    } else {
      current = this.head;

      while(current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.length++;
  }

  insert(position, element) {
    var node = new Node(element);
    var current = this.head, previous, index = 0;

    if(position > -1 && position < this.length) {
      if(position === 0){
        this.head = node;
        this.head.next = current;
      }else{
        while(index++ < position) {//4 4
          previous = current;
          current = current.next;
        }

        previous.next = node;
        node.next = current;
      }

      this.length++;
    }else {
      return ;
    }
  }

  toString() {
    let string = '', current = this.head;

    for(let i=0; i < this.length; i++) {
      string += current.element;
      current = current.next;
    }

    console.log(string);
  }

  isEmpty() {
    return this.length === 0;
  }

  size(){
    return this.length;
  }
}

let linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.insert(1,5);
linkedList.insert(4,6);
linkedList.toString();
