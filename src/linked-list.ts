import { ListNode } from './utils';

class SinglyLinkedList {
  head: ListNode | null;
  tail: ListNode | null;
  size: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(value: unknown) {
    const node = new ListNode(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail!.next = node;
      this.tail = node;
    }
    return ++this.size;
  }

  pop() {
    if (this.head) {
      if (!this.head.next) {
        const value = this.head.value;
        this.head = null;
        return value;
      }
      let curNode = this.head;
      let prevNode = this.head;
      while (curNode.next) {
        prevNode = curNode;
        curNode = curNode.next;
      }
      this.tail = prevNode;
      this.tail.next = null;
      this.size--;
      return curNode.value;
    }
    return null;
  }
}

export { SinglyLinkedList };
