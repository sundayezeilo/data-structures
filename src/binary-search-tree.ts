import { Queue } from './queue';

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
  constructor(private key?: keyof T) {
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

  find(value: T) {
    if (!this.root) return false;
    let cur = this.root;
    while (cur) {
      if (value === cur.value) return true;
      if (value < cur.value) {
        if (!cur.left) return false;
        cur = cur.left;
      } else {
        if (!cur.right) return false;
        cur = cur.right;
      }
    }
    return false;
  }

  BFS() {
    if (!this.root) return [];

    const queue = new Queue();
    queue.enqueue(this.root);
    let node;
    const data = [];
    while (queue.size) {
      node = queue.dequeue() as Node<T>;
      data.push(node.value);
      if (node.left) queue.enqueue(node.left);
      if (node.right) queue.enqueue(node.right);
    }
    return data;
  }
}

export { BST };
