"use strict";

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

const stack = new Stack();

stack.push(5);
stack.push(6);
stack.push(7);
stack.peek();
stack.pop();
stack.peek();
//  assert.strictEqual(stack.peek(), 7);
//  assert.strictEqual(stack.pop(), 7);
//  assert.strictEqual(stack.peek(), 6);
