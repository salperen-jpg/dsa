const Stack = require("./stack");

function balancedParenthesis(parenthesis) {
  const stack = new Stack();
  let latestPopped;
  for (let i = 0; i < parenthesis.length; i++) {
    if (parenthesis[i] === "(") {
      stack.push();
    } else if (stack.isEmpty() && parenthesis[i] === ")") return false;
    else {
      latestPopped = stack.pop();
    }
  }
  if (latestPopped === "(") return false;
  return stack.isEmpty();
}

module.exports = balancedParenthesis;
