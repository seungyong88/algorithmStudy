import Queue from './queue.es6';
// var Queue = require('./queue');

describe('Queue.prototype', () => {
  let queue = new Queue([1, 2, 3]);

  it('반환되는 큐 배열과 다른 새로운 배열이다.', () => {
    expect(queue.print()).not.toBe([1, 2, 3]);
  });

  it('큐에 요소를 추가한다.' , () => {
    queue.enqueue(4);
    expect(queue.print()).toEqual([1, 2, 3, 4]);
  });

  it('큐에서 값을 빼온다.', () => {
    let dequeueValue = queue.dequeue();
    expect(queue.print()).toEqual([2, 3, 4]);
    expect(dequeueValue).toEqual(1);
  });

  it('큐에 맨앞 요소를 확인한다.', () => {
    expect(queue.front()).toEqual(2);
  });
  
  it('큐 사이즈가 맞는지 확인한다.', () => {
    expect(queue.size()).toEqual(3);
  });

  it('clear를 사용하여 큐를 비운다.', () => {
    queue.clear();
    expect(queue.size()).toEqual(0);
  });

  it('큐가 비어 있는지 확인한다.', () => {
    expect(queue.isEmpty()).toEqual(true);
  });
});