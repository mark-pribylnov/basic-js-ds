"use strict";

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = addWithin(this.rootNode, data);

    function addWithin(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addWithin(node.left, data);
      } else {
        node.right = addWithin(node.right, data);
      }

      return node;
    }
  }

  has(data) {
    return findNode(this.rootNode, data);

    function findNode(node, data) {
      if (node === undefined || node === null) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      if (data > node.data) {
        findNode(node.rightNode, data);
      } else {
        findNode(node.leftNode, data);
      }
    }
  }
}

const tree1 = new BinarySearchTree();

// console.log(tree1, "\n\n");

tree1.add(2);
tree1.add(3);
tree1.add(4);

console.log(tree1.root());
