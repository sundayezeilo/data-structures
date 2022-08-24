class ListNode {
  value: unknown;
  next: ListNode | null;

  constructor(value: unknown, next = null) {
    this.value = value;
    this.next = next;
  }
}

export { ListNode };
