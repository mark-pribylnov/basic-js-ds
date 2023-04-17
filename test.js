"use strict";

class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
    this.length = 0;
  }

  add(value) {
    let newNode = new ListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.length++;
    } else {
      let currentNode = this.head; //start at the head

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = newNode;
    }

    // console.log(`\nAdded ${value}. Current state:\n`, this);
    this.length++;
  }

  print() {
    let currentNode = this.head;

    while (currentNode) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }
}

function remove(l, k) {
  let currentNode = l.head;
  while (currentNode.next) {
    if (currentNode.next.value === k) {
      currentNode.next = currentNode.next.next;
    }
    if (currentNode.next) {
      currentNode = currentNode.next;
    }
  }
  console.log(l);
  return l;
}

const list = new LinkedList();

list.add(1);
list.add(2);
list.add(3);

remove(list, 3);
// console.log(list.head);
// list.print();
