class Stack {
  constructor(arr = []) {
    this._items = arr;
  }

  push(element) {
    this._items.push(element);
  }

  pop() {
    return this._items.pop();
  }

  peek() {
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

  print() {
    return this._items;
  }
}

function solution(heights) {
  let answer = [];
  let stack = new Stack(heights);

  while (!stack.isEmpty()) {
    let sender = stack.pop();
    let receiverArr = stack.print();
    let added = false;

    for (let i = receiverArr.length - 1; i >= 0; i--) {
      if (sender < receiverArr[i]) {
        answer.unshift(i + 1);
        added = true;
        break;
      }
    }

    if (!added || receiverArr.length === 0) {
      answer.unshift(0)
      added = false;
    };
  }

  return answer;
}