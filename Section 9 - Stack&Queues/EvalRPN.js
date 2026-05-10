var evalRPN = function (tokens) {
  let stack = [];
  for (let i = 0; i < tokens.length; i++) {
    if (isNaN(tokens[i])) {
      let a = stack.pop();
      let b = stack.pop();
      let ans = eval(`${b}  ${tokens[i]}  ${a}`);
      stack.push(Math.trunc(ans));
    } else {
      stack.push(tokens[i]);
    }
  }
  return Number(stack.pop());
};

/**
 * Leet Code : 150
 * Approach 1 :->
 */
