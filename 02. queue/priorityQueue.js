// es6
const Queue = require('./queue.es6');

class PriorityQueue extends Queue {
  constructor(arr = []) {
    super();
  }

  // QueueElement(element, priority) { // {1}
  //   return { element, priority };
  // }

  enqueue(element, priority) {
    let queueElement = { element, priority }; // quelement 생성

    if (this.isEmpty()) { // 비어 있으면 
      this._items.push(queueElement); // 그냥 넣는다.
    } else { // 비어 있지 않으면
      let added = false;
      for (let i = 0; i < this._items.length; i++) { // 순회 하면서 확인
        if (queueElement.priority < this._items[i].priority) { // 새 엘리먼트가 우선순위가 크면 
          this._items.splice(i, 0, queueElement); // {3}  // 그곳에 넣음
          added = true; // 추가됨
          break; // {4}
        }
      }

      if (!added) { // {5} 추가되지 않았으면
        this._items.push(queueElement); // 마지막에 추가
      }
    }
  };

  // 그밖에 메소드는 기본 큐의 구현체와 동일 (상속 받음)
}

let priorityQueue = new PriorityQueue();

priorityQueue.enqueue('ss', 1);
priorityQueue.enqueue('aa', 1);
priorityQueue.enqueue('bb', 2);
priorityQueue.enqueue('cc', 3);

console.log(priorityQueue.print());
