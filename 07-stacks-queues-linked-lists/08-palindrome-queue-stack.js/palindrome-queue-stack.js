const Queue = require("./queue");
const Stack = require("./stack");
// hello
function isPalindromeQueueStack(str) {
  const formattedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const stack = new Stack();
  const queue = new Queue();
  for (let i = 0; i < formattedStr.length; i++) {
    stack.push(formattedStr[i]);
    queue.enqueue(formattedStr[i]);
  }
  while (!stack.isEmpty()) {
    if (stack.pop() !== queue.dequeue()) return false;
  }
  return true;
}

module.exports = isPalindromeQueueStack;
