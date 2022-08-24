import { SinglyLinkedList } from '../linked-list';

describe('SinglyLinkedList', () => {
  it('should call push method', () => {
    const list = new SinglyLinkedList();
    jest.spyOn(list, 'push');
    list.push(30);
    expect(list.push).toBeCalledTimes(1);
  });

  it('should push a value and return new size', () => {
    const list = new SinglyLinkedList();

    const oldSize = list.size;
    const newSize = list.push(10);

    expect(list.size).toBe(1);
    expect(newSize).toEqual(oldSize + 1);
  });

  it('should have the correct head and tail', () => {
    const list = new SinglyLinkedList();

    list.push(20);

    expect(list.head).toMatchObject({ value: 20, next: null });
    expect(list.tail).toMatchObject({ value: 20, next: null });
  });

  it('should have the correct head and tail', () => {
    const list = new SinglyLinkedList();

    list.push(20);
    list.push(50);
    const tail = { value: 50, next: null };

    expect(list.tail).toMatchObject(tail);
    expect(list.head).toMatchObject({ value: 20, next: tail });
  });

  it('should decrement size by 1', () => {
    const list = new SinglyLinkedList();
    list.push(20);
    list.push(50);
    expect(list.size).toBe(2);

    list.pop();
    expect(list.size).toBe(1);
  });

  it('should return the popped value', () => {
    const list = new SinglyLinkedList();
    list.push(20);
    list.push(50);

    expect(list.pop()).toBe(50);
  });

  it('should have the correct list', () => {
    const list = new SinglyLinkedList();
    list.push(20);
    list.push(50);
    list.push(70);
    list.push(100);

    list.pop();
    list.pop();
    expect(list.head).toMatchObject({
      value: 20,
      next: { value: 50, next: null }
    });

    list.pop();
    list.pop();
    list.pop();
    expect(list.head).toEqual(null);
  });
});
