class Queue {
  constructor(arr) {
    this._items = arr; 
  }

  enqueue(item) {
    this._items.push(item)
  }

  dequeue() {
    return this._items.shift();
  }

  front() {
    return this._items[0];
  }

  isEmpty() {
    return this._items.length === 0;
  }

  print() {
    console.log(this._items.toString());
  }
}

let queue = new Queue([1,2,3]);

queue.enqueue(4);
console.log('맨 앞에 요소를 확인', queue.front());
console.log('맨 앞 요소 삭제', queue.dequeue());
console.log('큐가 비었는지 확인', queue.isEmpty());
queue.print(); // 전체 출력