"use strict";

const { testOptional, ListNode } = require("./extensions/index.js");

function convertArrayToList(arr) {
  return arr.reverse().reduce((acc, cur) => {
    if (acc) {
      const node = new ListNode(cur);
      node.next = acc;
      return node;
    }

    return new ListNode(cur);
  }, null);
}

const initial = convertArrayToList([1, 2, 3, 3, 4, 5]);
// console.log(initial);

function remove(l, k) {
  let currentNode = l;
  if (currentNode.value === k) {
    currentNode.value = currentNode.next.value;
    currentNode.next = currentNode.next.next;
  }

  while (currentNode.next) {
    if (currentNode.next.value === k) {
      currentNode.next = currentNode.next.next;
    }
    if (currentNode.next) {
      currentNode = currentNode.next;
    }
  }
  // console.log(l);
  return l;
}

function print() {
  let currentNode = initial;

  while (currentNode) {
    console.log(currentNode.value);
    currentNode = currentNode.next;
  }
}

remove(initial, 3); // [1, 2, 3, 3, 4, 5] ==> [1, 2, 4, 5]
print();
// console.log(initial.next.value);
