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

  // removeDups() {
  //   var current = this.head.next;
    
  //   while(current != null && current.next != null) {
  //     var runner = current;
  //     while(runner.next != null) {
  //       if(current.data == runner.next.data) {
  //         runner.next = runner.next.next;
  //       }else{
  //         runner = runner.next;
  //       }

  //     }
  //     current = current.next;
  //   }
  // }



  removeDups() {
    var current = this.head.next;

    while(current != null && current.next != null) {
      var runner = current;
      while(runner.next != null) {
        if(current.data == runner.next.data) {
          runner.next = runner.next.next;
        }else{
          runner= runner.next;
        }

      }
      current = current.next;
    }
  }
}

var linkedList = new LinkedList();
linkedList.append(0);
linkedList.append(0);
linkedList.print();
linkedList.removeDups();
linkedList.print();
// linkedList.delete(0);
// linkedList.print();