class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = {next: null};
    this.length = 0;
  }

  append(data) {
    var end = new Node(data);
    var current = this.head;

    if (this.isEmpty()) {
      this.head.next = end;
    } else {
      while (current.next != null) {
        current = current.next;
      }

      current.next = end;
    }

    this.length++;
  }

  delete(data) {
    var current = this.head;

    while (current.next != null) {
      if (current.next.data == data) {
        current.next = current.next.next;
      } else {
        current = current.next;
      }
    }
  }

  print() {
    var current = this.head.next; 
    var string = '';

    if (this.isEmpty()) {
      return;
    } else {
      while (current.next != null) {
        string += current.data + " -> ";
        current = current.next;
      }

      console.log(string+current.data);
    }
  }

  isEmpty() {
    return this.head.next === null;
  }


  deleteNode(current) {
    if(current == null || current.next == null) {
      return false;
    }

    var node = current.next;
    current.data = node.data;
    current.next = node.next;
    return false;
  }
}

var linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.print();
linkedList.deleteNode(linkedList.head.next.next);
linkedList.print();
