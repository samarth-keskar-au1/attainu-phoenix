"use strict";

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  toString() {
    return this.value;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value, data) {
    let newNode = new Node(value);

    if (!this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  prepend(value, data) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  search(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }

    return null;
  }

  removeNthFromEnd(n, head = this.head) {
    if (head == null || head.next == null) return null;

    let slow = head,
      fast = head;

    for (let i = 0; i <= n + 1; i++) {
      if (fast == null) return head;
      fast = fast.next;
    }

    while (fast != null) {
      slow = slow.next;
      fast = fast.next;
    }

    return slow.next;
  }

  delete(value) {
    if (this.head.value === value) {
      return (this.head = this.head.next);
    } else {
      let previousNode = this.head;
      let currentNode = previousNode.next;

      while (currentNode) {
        if (currentNode.value === value) {
          previousNode.next = currentNode.next;
          currentNode = currentNode.next;
          break;
        } else {
          previousNode = currentNode;
          currentNode = currentNode.next;
        }
      }
    }
  }

  print() {
    let currentNode = this.head;
    let values = [];
    while (currentNode) {
      values.push(currentNode.toString());
      currentNode = currentNode.next;
    }

    console.log(values);
  }
}

let n = new LinkedList();
n.append(1);
n.append(2);
n.append(3);
n.append(4);
n.append(5);
n.append(6);
n.append(7);
n.append(8);
n.append(9);
n.append(10);
n.append(11);

n.print();

console.log(n.removeNthFromEnd(2));
