import { Queue } from '../queue';

describe('Queue', () => {
  describe('enqueue', () => {
    it('should add a value to the queue', () => {
      const queue = new Queue();

      const newSize = queue.enqueue(3);

      expect(newSize).toEqual(1);
      expect(queue.first!.value).toBe(3);
      expect(queue.first).toMatchObject({ ...queue.last });
    });

    it('should return the correct size', () => {
      const queue = new Queue();
      queue.enqueue(3);
      expect(queue.size).toEqual(1);
    });

    it('should add more than one values to the queue', () => {
      const queue = new Queue();

      queue.enqueue(7);
      queue.enqueue(100);
      queue.enqueue(5000);
      expect(queue.first!.value).toEqual(7);
      expect(queue.first?.next?.value).toEqual(100);
    });
  });

  describe('dequeue', () => {
    it('should remove a value from the queue', () => {
      const queue = new Queue();

      queue.enqueue(7);
      queue.enqueue(100);
      queue.enqueue(300);
      queue.enqueue(5000);
      queue.enqueue(1000);

      const oldSize = queue.size;
      queue.dequeue();
      queue.dequeue();

      expect(queue.size).toEqual(oldSize - 2);
      expect(queue.first!.value).toBe(300);
    });

    it('should return the correct value by calling dequeue', () => {
      const queue = new Queue();
      queue.enqueue(7);
      queue.enqueue(2);
      queue.enqueue(30);

      expect(queue.dequeue()).toEqual(7);
      expect(queue.dequeue()).toEqual(2);
      expect(queue.dequeue()).toEqual(30);
      expect(queue.dequeue()).toBeUndefined();
    });
  });
});
