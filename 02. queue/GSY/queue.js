export default function Queue(arr) {
  var _items = arr;

  this.enqueue = function(element) {
      _items.push(element);
  }

  this.dequeue = function() {
    return _items.shift();
  }

  this.front = function() {
    return _items[0];
  }

  this.isEmpty = function() {
    return _items.length === 0;
  }

  this.clear = function() {
    _items = [];
  }

  this.size = function() {
    return _items.length;
  }

  this.print = function() {
    return _items;
  }

  this.printToString = function() {
    return _items.toString();
  }
}

// let queue = new Queue([1]);
// queue.enqueue(2);
// console.log(queue.print());
// queue.dequeue();
// console.log(queue.print());

// queue.enqueue(3);
// queue.enqueue(4);
// queue.enqueue(5);
// console.log(queue.front());
// console.log(queue.size());
// console.log(queue.print());

// queue.clear();
// console.log(queue.isEmpty());