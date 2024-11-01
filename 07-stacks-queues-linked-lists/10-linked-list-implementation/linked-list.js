class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(value) {
    const node = new Node(value);
    if (!this.head) this.head = node;
    else {
      let current = this.head;
      while (current && current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }

  addToSpecificIndex(index, value) {
    const node = new Node(value);
    if (index === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      let i = 0;
      let current = this.head;
      let previous = null;
      while (i < index) {
        previous = current;
        current = current.next;
        i++;
      }
      previous.next = node;
      node.next = current;
    }
  }
  removeLast() {
    let current = this.head;
    let target;
    if (current && current.next) {
      while (current && current.next && current.next.next) {
        current = current.next;
      }
      target = current.next;
      current.next = null;
    } else {
      target = this.head;
      this.head = null;
    }
    return target.data;
  }
  removeFromSpecificIndex(index) {
    let target;
    if (index === 0) {
      target = this.head;
      this.head = null;
    } else {
      let i = 0;
      let previous;
      let current = this.head;
      while (i < index) {
        previous = current;
        current = current.next;
        i++;
      }
      target = current;
      previous.next = current.next;
    }
    return target.data;
  }
}

const list = new LinkedList();
list.add(0);
list.add(1);
list.addToSpecificIndex(1, 2);
list.removeLast();
list.removeFromSpecificIndex(1);
console.log(list);

module.exports = { Node, LinkedList };
