const { NotImplementedError } = require("../lib/errors");
const { ListNode } = require("../extensions/list-node.js");

// Tutorial: https://www.youtube.com/watch?v=bK7I79hcm08

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  getUnderlyingList() {
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    return this.head;
  }

  enqueue(value) {
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    const newNode = new ListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let currentNode = this.head; //start at the head

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = newNode;

      this.tail = currentNode.next;
    }
    this.length++;
  }

  dequeue() {
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    if (!this.head) return undefined;

    const deletedValue = this.head.value;
    this.head = this.head.next;
    this.tail = null;
    this.length--;
    return deletedValue;
  }
}

module.exports = {
  Queue,
};

// const q = new Queue();
// q.enqueue(1);
// q.enqueue(3);
// q.dequeue();

// console.log(q.getUnderlyingList());
