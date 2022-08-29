class Node {
  value: unknown;
  next: Node | null;

  constructor(value: unknown) {
    this.value = value;
    this.next = null;
  }
}
class SinglyLinkedList {
  private static MAX_LIST_LENGTH = Number.MAX_SAFE_INTEGER;
  head: Node | null;
  tail: Node | null;
  length: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value: unknown) {
    if (this.length > SinglyLinkedList.MAX_LIST_LENGTH) {
      throw 'MAX_LIST_LENGTH exceeded!';
    }
    const node = new Node(value);
    if (!this.tail) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this.length;
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
      this.length--;
      return curNode.value;
    }
    return undefined;
  }

  insert(value: unknown, position: number) {}
}

export { SinglyLinkedList };
