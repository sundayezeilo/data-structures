class Node<T> {
  value: T;
  left: Node<T> | null;
  right: Node<T> | null;
  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST<T extends number | string> {
  root: Node<T> | null;
  constructor() {
    this.root = null;
  }

  insert(value: T) {
    const newNode = new Node<T>(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let cur = this.root;

    while (true) {
      if (value === cur.value) return undefined;

      if (value < cur.value) {
        if (!cur.left) {
          cur.left = newNode;
          return this;
        }
        cur = cur.left;
      } else if (!cur.right) {
        cur.right = newNode;
        return this;
      } else {
        cur = cur.right;
      }
    }
  }

  find(value: T) {}
}

export { BST };
