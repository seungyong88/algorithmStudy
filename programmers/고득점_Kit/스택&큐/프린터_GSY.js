class PriorityQueue {
  constructor(arr = [], location) {
    this._location = arr[location - 1];
    this._items = [];
    // this._items = ;
    arr.forEach(element => {
      this.enQueue(element);
    })
  }

  // [2, 1, 3, 2]
  enQueue(element) {
    let added = false;
    if (this._items.length === 0) {
      this._items.push(element);
    } else {
      this._items.forEach((queueItem, index) => {
        if (element > queueItem) {
          this._items.splice(index, 0, element);
          console.log('this._items', this._items);
          added = true;
        }
      });
    }

    if (!added) {
      this._items.push(element);
    }

  }


}

function solution(priorities, location) {
  let priorityQueue = new PriorityQueue(priorities, location);
  var answer = priorityQueue;
  return answer;
}

let priorities = [2, 1, 3, 2];
let location = 2;
console.log(solution(priorities, location));