import Stack from './stack.es6';
// let stack = require('./stack');

describe('Stack.prototype', () => {
  let stack = new Stack([1,2]);

  it('반환되는 배열은 기존 배열과 다른 새로운 배열이다.', () => {
    expect(stack.print()).not.toBe([1,2]);
  });

  it('스택에 요소를 추가한다.' , () => {
    stack.push(3);
    expect(stack.print()).toEqual([1,2,3]);
  });

  it('스택에서 값을 빼온다.', () => {
    let popValue = stack.pop();
    expect(stack.print()).toEqual([1,2]);
    expect(popValue).toEqual(3);
  });

  it('마지막에 추가 된 원소를 확인한다.', () => {
    expect(stack.peek()).toEqual(2);
  });
  
  it('스택 사이즈가 맞는지 확인한다.', () => {
    expect(stack.size()).toEqual(2);
  });

  it('clear를 사용하여 스택을 비운다.', () => {
    stack.clear();
    expect(stack.size()).toEqual(0);
  });

  it('스택이 비어 있는지 확인한다.', () => {
    expect(stack.isEmpty()).toEqual(true);
  });
});