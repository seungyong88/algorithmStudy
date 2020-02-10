export function createStack(arr) {
  let _items = arr;

  return {
    push(element) {
      _items.push(element);
    },
    pop() {
      return _items.pop();
    },
    peek() {
      return _items[_items.length - 1]; 
    },
    isEmpty() {
      return _items.length === 0; 
    },
    size() {
      return _items.length; 
    },
    clear() {
      _items = []; 
    },
    print(){
      console.log(_items.toString());
    }
  };
};

// let stack = createStack([1]);
// stack.push(2);
// stack.push(3);
// stack.print();
// stack.pop();
// stack.print();
// console.log(stack.size());
// stack.clear();
// console.log(stack.isEmpty());