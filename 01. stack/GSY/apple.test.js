describe('Stack.prototype', () => {
  let stack = [1, 2];

  it('반환되는 배열은 기존 배열과 다른 새로운 배열이다.', () => {
    expect(stack).not.toBe([1,2]);
  });

  it('스택에 요소를 추가한다.' , () => {
    stack.push(3);
    expect(stack).toEqual([1,2,3]);
  });

  it('스택에서 값을 빼온다.', () => {
    stack.pop();
    expect(stack).toEqual([1,2]);
  });

  it('마지막에 추가 된 원소를 확인한다.', () => {
    expect(stack[stack.length-1]).toEqual(2);
  });

  it('스택이 비어 있는지 확인한다.', () => {
    expect(stack.length).toEqual(2);
  });

  it('스택 사이즈가 맞는지 확인한다.', () => {
    expect(stack.length).toEqual(2);
  });

  it('스택이 비어 졌는지 확인한다.', () => {
    stack = [];
    expect(stack.length).toEqual(0);
  });

  
});

