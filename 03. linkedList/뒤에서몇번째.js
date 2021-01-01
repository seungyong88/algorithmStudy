// 단방향 LinkedList의 끝에서 k번째 노드를 찾는 알고리즘을 구현하시오.
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

  // kthToLast(k) { // 카운트 이용
  //   var current = this.head;
  //   var total = 1;
    
  //   while(current.next != null) {
  //     total++;
  //     current = current.next;
  //   } // total 갯수만 

  //   current = this.head; // 다시 처음으로

  //   for(var i=1; i < total-k+1; i++) {
  //     current = current.next;
  //   }

  //   console.log(current.data);
  // }]

  
  kthToLast(current, k) { // 포인트 이용
    var p1 = current;
    var p2 = current;

    for(var i =0; i<k; i++) {
      if(p1 == null) return null;
      p1 = p1.next;
    }

    while(p1 != null) {
      p1 = p1.next;
      p2 = p2.next;
    }
    console.log(p2);
    return p2;
  }


  
  // kthToLast(current, k) { // 재귀 이용
  //   if(current == null) {
  //     return 0;
  //   }

  //   var count = this.kthToLast(current.next, k) +1;
  //   if(count == k) {
  //     console.log(k + "th to las node is :" + current.data);
  //   }
  //   return count;
  // }

}


var linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.kthToLast(linkedList.head.next, 3);
// linkedList.print()