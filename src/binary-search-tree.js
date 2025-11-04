const { NotImplementedError } = require("../lib/errors");
const { Node } = require("../extensions/list-tree.js");

// Tutorial: https://www.youtube.com/watch?v=5cU1ILGy6dM

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
// class Node {
//   constructor(data, left = null, right = null) {
//     this.data = data;
//     this.left = left;
//     this.right = right;
//   }
// }

class BinarySearchTree {
  constructor() {
    this.treeRoot = null;
  }
  root() {
    return this.treeRoot;
  }

  add(data) {
    const node = this.treeRoot;
    if (node === null) {
      this.treeRoot = new Node(data);
      return;
    } else {
      const searchTree = function (node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }

  find(data) {
    let current = this.treeRoot;
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
    }
    return current;
  }

  has(data) {
    let current = this.treeRoot;
    while (current) {
      if (data === current.data) {
        return true;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  remove(data) {
    const removeNode = function (node, data) {
      if (node == null) {
        return null;
      }
      if (data == node.data) {
        if (node.left == null && node.right == null) {
          return null;
        }
        if (node.left == null) {
          return node.right;
        }
        if (node.right == null) {
          return node.left;
        }
        let tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };
    this.treeRoot = removeNode(this.treeRoot, data);
  }

  min() {
    let current = this.treeRoot;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  max() {
    let current = this.treeRoot;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }
}

module.exports = {
  BinarySearchTree,
};

// const tree = new BinarySearchTree();

// tree.add(10);
// console.log(tree.root());
// tree.add(11);
// tree.add(9);
// tree.add(12);
// tree.add(8);
// console.log(tree.root());
