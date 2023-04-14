const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    return this.rootNode;
  }

  add(data) {
    this.rootNode = insert(this.rootNode, data);

    function insert(node, value) {
      if (node === null) {
        return new Node(value);
      }

      if (node.data === value) {
        return node;
      }

      if (node.data > value) {
        node.left = insert(node.left, data);
      } else {
        node.right = insert(node.right, data);
      }

      return node;
    }
  }

  has(/*data*/) {
    // function findNode(node, data) {
    //   if (node === null) {
    //     return false;
    //   }

    //   if (node.data === data) {
    //     return true;
    //   }

    //   if (data < node.data) {
    //     return findNode(node.left, data);
    //   } else {
    //     return findNode(node.right, data);
    //   }
    // }

    // return findNode(this.rootNode, data);

    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree,
};
