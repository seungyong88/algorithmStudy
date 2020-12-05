class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this._head = null;
    this._length = 0;
  }

  append(element) {
    var node = new Node(element), current;

    if (this.isEmpty()) { // 비었으면
      this._head = node; // 첫번째에 추가
    } else {
      current = this._head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this._length++;
  }

  insert(position, element) {
    var node = new Node(element), current = this._head, previous, index = 0;

    if (position > -1 && position < this._length) {
      if (position === 0) {
        this._head = node;
        this._head.next = current;
        this._length++;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }

        previous.next = node;
        node.next = current;

        this._length++;
      }
    } else {
      return false;
    }
  }

  removeAt(position) {
    var current = this._head;
    var previous, current, index = 0;
    if (position > -1 && position < this._length) {
      this._length--;
      if (position === 0) {
        this._head = current.next;
        return current.element;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }

        previous.next = current.next;
        return current.element;
      }
    } else {
      return false;
    }
  }

  remove(element) {
    let current = this._head, index = 0;

    while (current.next) {
      if (current.element === element) { break; }
      index++;
      current = current.next;
    }

    this.removeAt(index);
  }

  toString() {
    let current, string = '';
    current = this._head;

    for (let i = 0; i < this._length; i++) {
      string += current.element + ', ';
      current = current.next;
    }

    return string;
  }

  isEmpty() {
    return this._length === 0;
  }

  size() {
    return this._length;
  }

}

let list = new LinkedList();

list.append(11);
list.append(12);
list.append(13);

console.log(list.removeAt(1));
list.insert(1, 12);
console.log(list.toString());
list.remove(12);
console.log(list.toString());
console.log(list.removeAt(0));
console.log(list.isEmpty());
console.log(list.removeAt(0));
console.log(list.size());
console.log(list.isEmpty());