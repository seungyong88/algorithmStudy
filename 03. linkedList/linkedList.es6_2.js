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
  
  isEmpty() {
    return this.length === 0;
  }

  size() {
    console.log(this.isEmpty());
  }

  toString () {
    let string = '';
    let current = this.head;

    if(this.isEmpty()) {
      console.log('empty');
    }else{
      while(current.next != null) {
        string += current.element+' -> ';
        current = current.next;
      }
  
      console.log(string+current.element);
    }
    
  }

  append(element) {
    let current = this.head;
    let node = new Node(element);

    if(this.isEmpty()){
      this.head = node;
    }else {
      while(current.next != null) {
        current = current.next
      }

      current.next = node;
    }

    this.length++;
  }

  remove(element) {
    let current = this.head;
    let previous = null;
    
    if(this.isEmpty()) return;

    if(current.element == element){
      this.head = current.next;
      this.length--;
    }else{
      while(current.next != null){
        previous = current;
        current = current.next;

        if(current.element == element) {
          previous.next = current.next;
          this.length--;
          break;
        }
        
      }
    }

  }
}

let linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.toString();
linkedList.remove(1);
linkedList.remove(2);
linkedList.remove(3);
linkedList.remove(4);
linkedList.toString();