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

  has(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }
  // has(data) {
  //   const checkData = (targetNode, targetData) => {
  //     // console.log(this);
  //     if (targetNode.data === data) {
  //       console.log("Got it! Found the value!");
  //       return true;
  //     } else if (targetNode.data > data) {
  //       checkData(this.left, targetData);
  //     } else if (targetNode.data < data) {
  //       checkData(this.right, targetData);
  //     }
  //   };
  //   checkData(this.rootNode, data);
  // }

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
