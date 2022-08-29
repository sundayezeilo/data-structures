class Node {
  value: unknown;
  next: Node | null;

  constructor(value: unknown) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  private static MAX_STACK_SIZE = Number.MAX_SAFE_INTEGER;

  first: Node | null;
  last: Node | null;
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
    const node = new Node(value);
    if (!this.last) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }

    return ++this.size;
  }

  dequeue() {
    if (!this.first) {
      return undefined;
    }
    const value = this.first.value;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;

    return value;
  }
}

export { Queue };
