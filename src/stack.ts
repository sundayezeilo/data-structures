import { ListNode } from './utils';

class Stack {
  private static MAX_STACK_SIZE = Number.MAX_SAFE_INTEGER;

  first: ListNode | null;
  last: ListNode | null;
  size: number;

  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value: unknown) {
    if (this.size > Stack.MAX_STACK_SIZE) {
      throw 'MAX_STACK_SIZE exceeded!';
    }
    const node = new ListNode(value);

    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      node.next = this.first;
      this.first = node;
    }
    this.size++;
    return this.size;
  }

  pop() {
    if (!this.first) {
      return undefined;
    }

    const value = this.first.value;

    if (this.first === this.last) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }

    return value;
  }
}

export { Stack };
