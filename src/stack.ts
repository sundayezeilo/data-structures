import { ListNode } from './utils';

class Stack {
  first: ListNode | null;
  last: ListNode | null;
  size: number;

  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value: unknown) {
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
      return null;
    }

    const value = this.first.value;
    this.first = this.first.next;

    if (!this.first) {
      this.last = null;
    }

    return value;
  }
}

export { Stack };
