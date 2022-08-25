import { Stack } from '../stack';

describe('Stack', () => {
  it('should push a value onto the stack and return new size', () => {
    const stack = new Stack();

    expect(stack.push('FIFO')).toEqual(1);
  });

  it('should have the first and last values pushed', () => {
    const stack = new Stack();

    stack.push('FIRST');
    stack.push('LAST');
    expect(stack.first).toMatchObject({ value: 'LAST' });
    expect(stack.last).toMatchObject({ value: 'FIRST' });
  });

  it('should return null if stack is empty', () => {
    const stack = new Stack();
    stack.push('FIRST');
    stack.push('LAST');
    stack.pop();
    stack.pop();
    expect(stack.pop()).toBe(undefined);
  });

  it('should return the popped value', () => {
    const stack = new Stack();
    stack.push('FIRST');
    stack.push('LAST');

    expect(stack.pop()).toEqual('LAST');
    expect(stack.pop()).toEqual('FIRST');
  });
});
