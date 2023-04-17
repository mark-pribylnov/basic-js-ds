"use strict";

// class ListNode {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor(head = null) {
//     this.head = head;
//     this.length = 0;
//   }

//   add(value) {
//     let newNode = new ListNode(value);

//     if (!this.head) {
//       this.head = newNode;
//       this.length++;
//     } else {
//       let currentNode = this.head; //start at the head

//       while (currentNode.next) {
//         currentNode = currentNode.next;
//       }

//       currentNode.next = newNode;
//     }

//     // console.log(`\nAdded ${value}. Current state:\n`, this);
//     this.length++;
//   }

//   remove(value) {
//     let currentNode = this.head;
//     let prevNode;
//     if (currentNode.value === value) {
//       this.head = currentNode.next;
//     } // if the value we want to remove is head, just move the pointer to the element after the head
//     else {
//       while (currentNode.value !== value) {
//         prevNode = currentNode;
//         currentNode = currentNode.next;
//       }
//       prevNode.next = currentNode.next;
//     }
//     this.length--;
//   }

//   print() {
//     let currentNode = this.head;

//     while (currentNode) {
//       console.log(currentNode.value);
//       currentNode = currentNode.next;
//     }
//   }
// }

// const list = new LinkedList();

// for (let i = 0; i < 5; i++) {
//   let randomValue = Math.floor(Math.random() * 10);
//   list.add(randomValue);
// }
// list.add(1);
// list.add(2);
// list.add(3);
// list.add(4);

// // list.remove(3);
// list.print();

const { ListNode } = require("./extensions");

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
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
    const deletedValue = this.head.value;
    this.head = this.head.next;
    this.length--;
    return deletedValue;
  }

  getUnderlyingList() {
    return this;
  }

  print() {
    let currentNode = this.head;

    while (currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }

    console.log("Head:\n", this.head);
    console.log("Tail:\n", this.tail);
  }
}

const q = new Queue();

q.enqueue(2);
q.enqueue(8);
q.enqueue(5);
q.enqueue(87);
q.enqueue(7);
q.dequeue();
q.dequeue();
// q.print();
console.log(q.getUnderlyingList());
