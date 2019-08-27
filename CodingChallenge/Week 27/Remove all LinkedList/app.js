"use strict";
const LinkedList = require("./list");

class RemoveAll extends LinkedList {
  constructor(value) {
    super(value);
    this.value = value;
  }

  removeAll(value) {
    if (this.head.value === value) {
      this.head = this.head.next;
      this.removeAll(value);
    } else {
      let previousNode = this.head;
      let currentNode = previousNode.next;

      while (currentNode) {
        if (currentNode.value === value) {
          previousNode.next = currentNode.next;
          currentNode = currentNode.next;
        } else {
          previousNode = currentNode;
          currentNode = currentNode.next;
        }
      }
    }
  }
}

let rm = new RemoveAll();

rm.append(10);
rm.append(20);
rm.append(10);
rm.append(20);
rm.print();
rm.removeAll(10);
rm.print();
