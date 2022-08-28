import { Queue } from '../queue';

describe('Queue', () => {
  describe('enqueue', () => {
    it('should add a value to the queue', () => {
      const queue = new Queue();

      const newSize = queue.enqueue('FIRST');

      expect(newSize).toEqual(1);
      expect(queue.first!.value).toBe('FIRST');
      expect(queue.first).toMatchObject({ ...queue.last });
    });

    it('should return the correct size', () => {
      const queue = new Queue();
      queue.enqueue(3);
      expect(queue.size).toEqual(1);
    });

    it('should add more than one values to the queue', () => {
      const queue = new Queue();

      queue.enqueue('FIRST');
      queue.enqueue('SECOND');
      queue.enqueue('THIRD');
      expect(queue.first!.value).toEqual('FIRST');
      expect(queue.first?.next?.value).toEqual('SECOND');
    });
  });

  describe('dequeue', () => {
    it('should remove a value from the queue', () => {
      const queue = new Queue();

      queue.enqueue('FIRST');
      queue.enqueue('SECOND');
      queue.enqueue('THIRD');
      queue.enqueue('FOURTH');
      queue.enqueue('FIFTH');

      const oldSize = queue.size;
      queue.dequeue();
      queue.dequeue();

      expect(queue.size).toEqual(oldSize - 2);
      expect(queue.first!.value).toBe('THIRD');
    });

    it('should return the correct value by calling dequeue', () => {
      const queue = new Queue();

      queue.enqueue('FIRST');
      queue.enqueue('SECOND');
      queue.enqueue('THIRD');
      queue.enqueue('FOURTH');
      queue.enqueue('FIFTH');

      expect(queue.dequeue()).toEqual('FIRST');
      expect(queue.dequeue()).toEqual('SECOND');
      expect(queue.dequeue()).toEqual('THIRD');
      expect(queue.dequeue()).toEqual('FOURTH');
      expect(queue.dequeue()).toEqual('FIFTH');
      expect(queue.dequeue()).toBeUndefined();
    });
  });
});
