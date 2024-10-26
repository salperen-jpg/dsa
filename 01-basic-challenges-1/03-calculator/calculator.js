function calculator(num1, num2, op) {
  let res;
  switch (op) {
    case "+":
      res = num1 + num2;
      break;
    case "-":
      res = num1 - num2;
      break;
    case "*":
      res = num1 * num2;
      break;
    case "/":
      res = num1 / num2;
      break;
    default:
      throw new Error("Operator is not valid!");
  }
  return res;
}

module.exports = calculator;
