import { ListNode } from './utils';

class Queue {
  private static MAX_STACK_SIZE = Number.MAX_SAFE_INTEGER;

  first: ListNode | null;
  last: ListNode | null;
  size: number;

  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(value: unknown) {
    if (this.size + 1 > Queue.MAX_STACK_SIZE) {
      throw new Error('MAX_QUEUE_SIZE exceeded!');
    }
    const node = new ListNode(value);
    if (!this.last) {
      this.first = node;
      this.last = node;
    } else {
      const temp = this.last;
      this.last = node;
      temp.next = this.last;
    }

    return ++this.size;
  }

  dequeue() {
    if (!this.first) {
      return undefined;
    }
    const value = this.first.value;
    this.first = this.first.next;
    this.size--;
    if (this.size === 0) {
      this.last = null;
    }

    return value;
  }
}

export { Queue };
