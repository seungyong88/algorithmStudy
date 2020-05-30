class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.length=0;
    this.head = null;
  }

  append(element) {
    let node = new Node(element), current;

    if(this.head == null) {
      this.head = node;
    }else{

      current = this.head;

      while(current.next){
        current = current.next;
      }

      current.next = node;
    }

    this.length++;
  };

  insert(position, element){
    var node = new Node(element), current= this.head, index = 0, previous;

    if(position > -1 && position <= this.length) {
      if(position === 0) {
        node.next = current;
        this.head = node;
      }else{
        
        while(index++ < position) {
          previous = current;
          current = current.next;
        }

        previous.next = node;
        node.next= current;

      }

      this.length++;

      return true;
    }

  }

  removeAt(position){
    // 범위 외의 값인지 체크한다.
    if(position > -1 && position < this.length ) {
      let current = this.head; previous, index = 0;

      if(position === 0){
        this.head = this.head.next;
      }else{
        while(index++ < position) {
          previous = current;
          current = current.next;
        }

        previous.next = current.next;
      }

      this.length --;

      return current.element;
    }else{
      return null;
    }
  }

  remove(element) {

  }

  isEmpty() {

  }

  size() {

  }

  toString() {

  }

  print() {

  }

}


let linkList = new LinkedList();

linkList.append(4); 
linkList.append(5);
linkList.append(6); 
linkList.append(7);

linkList.insert(3.5, 2);

console.log(linkList);
