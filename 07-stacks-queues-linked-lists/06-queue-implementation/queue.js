class Queue {
  constructor() {
    this.array = [];
  }
  enqueue(val) {
    this.array.push(val);
    return true;
  }

  dequeue() {
    return this.array.shift();
  }

  isEmpty() {
    return this.array.length === 0;
  }

  peek() {
    return this.array[this.array.length - 1];
  }
}
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue());
// console.log(queue);
// console.log(queue.isEmpty());
// console.log(queue.peek());
// console.log(queue);
module.exports = Queue;
