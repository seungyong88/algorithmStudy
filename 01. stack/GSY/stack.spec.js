// import { Stack } from './stack.es6';

//es6
// export default class Stack {
//   constructor(arr = []){
//     this._items = arr;
//   }

//   push(element){
//     this._items.push(element);
//   }

//   pop(){
//     return this._items.pop();
//   }

//   peek(){
//     return this._items[this._items.length - 1];
//   }

//   isEmpty() {
//     return this._items.length === 0;
//   }

//   size() {
//     return this._items.length;
//   }

//   clear() {
//     this._items = [];
//   }

//   print(){
//     console.log(this._items.toString());
//   }
// }

// let stack = new Stack([1]);
// stack.push(2);
// stack.push(3);
// stack.print();
// stack.pop();
// stack.print();
// console.log(stack.size());
// stack.clear();
// console.log(stack.isEmpty());


class Stack {
  constructor(arr = []){
    this._items = arr;
  }

  push(element){
    this._items.push(element);
  }

  pop(){
    return this._items.pop();
  }

  peek(){
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

  print(){
    console.log(this._items.toString());
  }
}


describe('Stack.prototype', () => {
  // it('initVal 옵션 사용 시 초기값이 해당 값으로 지정된다.', () => {
  //   const counter = createCounter({initVal: 10, min: 10});
  //   expect(counter.val()).toBe(10);
  // });

  it('반환되는 배열은 기존 배열과 다른 새로운 배열이다.', () => {
    let stack = new Stack([1,2]);
    expect(stack).not.toBe([1,2]);
  });

  // it('스택에 요소를 추가한다.' , () => {
  //   stack.push(3);
  //   expect(stack).toEqual([1,2,3]);
  // });

  // it('스택에서 값을 빼온다.', () => {
  //   stack.pop();
  //   expect(stack).toEqual([1,2]);
  // });

  // it('마지막에 추가 된 원소를 확인한다.', () => {
  //   expect(stack[stack.length-1]).toEqual(2);
  // });

  // it('스택이 비어 있는지 확인한다.', () => {
  //   expect(stack.length).toEqual(2);
  // });

  // it('스택 사이즈가 맞는지 확인한다.', () => {
  //   expect(stack.length).toEqual(2);
  // });

  // it('스택이 비어 졌는지 확인한다.', () => {
  //   stack = [];
  //   expect(stack.length).toEqual(0);
  // });
});