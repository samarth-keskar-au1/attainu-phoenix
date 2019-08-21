"use strict";

class Node {
  constructor(value = null) {
    this.left = null;
    this.right = null;
    this.value = value;
  }

  insert(value) {
    if (!this.value) {
      this.value = value;
      return;
    }

    if (value <= this.value) {
      if (this.left) {
        this.left.insert(value);
      } else {
        this.left = new Node(value);
      }
    } else {
      if (this.right) {
        this.right.insert(value);
      } else {
        this.right = new Node(value);
      }
    }
  }

  printInOrder() {
    if (this.left) {
      this.left.printInOrder();
    }

    console.log(this.value);

    if (this.right) {
      this.right.printInOrder();
    }
  }
}

class BinarySearchTree {
  constructor() {
    this.root = new Node();
  }

  insert(value) {
    this.root.insert(value);
  }

  printInOrder() {
    this.root.printInOrder();
  }
}

let bst = new BinarySearchTree();

bst.insert(100);
bst.insert(150);
bst.insert(50);
bst.insert(145);
bst.insert(40);
bst.insert(80);

bst.printInOrder();
