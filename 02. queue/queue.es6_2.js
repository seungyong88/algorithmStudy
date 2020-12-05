// module.exports = class Queue {
class Queue {
  constructor(arr = []) {
    this.arr = arr;
  }

  enqueue(...item) {
    // this.arr.push(...item);
    this.arr = this.arr.concat(...item);
  }

  dequeue() {
    return this.arr.shift();
  }

  front() {
    return this.arr[0];
  }

  size() {
    return this.arr.length;
  }

  clear() {
    this.arr = [];
  }

  isEmpty() {
    return this.arr.length === 0;
  }

  print() {
    console.log(this.arr);
  }

  printToString() {
  }
}

let queue = new Queue([1,2,3]);
queue.enqueue(4,5,6);
console.log('맨 앞에 요소를 확인', queue.front());
console.log('맨 앞 요소 삭제', queue.dequeue());
queue.print();
console.log('큐 size', queue.size());
console.log('큐가 비었는지 확인', queue.isEmpty());
console.log(queue.print()); // 전체 출력
queue.clear();
console.log('큐가 비었는지 확인', queue.isEmpty());