class Stack {
  constructor() {
    this.stack = [];
    this.top = -1;
  }

  push(val) {
    this.top++;
    this.stack[this.top] = val;
    return true;
  }

  pop() {
    if (this.top === -1) return;
    const poppedValue = this.stack.pop();
    this.top--;
    return poppedValue;
  }

  peek() {
    if (this.top !== -1) return this.stack[this.top];
  }

  isEmpty() {
    return this.top === -1;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.pop();
stack.pop();
console.log(stack.peek());
console.log(stack.isEmpty());
stack.pop();
console.log(stack);

module.exports = Stack;
