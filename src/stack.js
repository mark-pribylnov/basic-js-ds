const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.items = [];
    this.size = 0;
  }

  push(element) {
    this.items.push(element);
    this.size++;
    console.log(`\nAdd ${element}:`, this);
  }

  pop() {
    const deletedItem = this.items[this.items.length - 1];
    if (this.items.length === 0) return undefined;
    this.items.pop();
    this.size--;
    console.log(`Delete ${deletedItem}. Now:`, this);
    return deletedItem;
  }

  peek() {
    console.log(this.items[this.items.length - 1]);
    return this.items[this.items.length - 1];
  }
}

module.exports = {
  Stack,
};
