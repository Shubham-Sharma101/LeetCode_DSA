var removeOuterParentheses = function (s) {
  let stack = [];
  let ans = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(s[i]);
      if (stack.length > 1) {
        ans = ans + s[i];
      }
    } else {
      if (stack.length > 1) {
        ans = ans + s[i];
      }
       stack.pop();
    }
  }
  return ans;
};

// Or

var removeOuterParentheses = function (s) {
    let level = 0;
    let ans = "";
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            ++level;
            ans += ((level > 1) ? s[i] : "")
        } else {
            ans += ((level > 1) ? s[i] : "")

            --level;
        }
    }
    return ans;
};

console.log(removeOuterParentheses("(()())(())"));
console.log(removeOuterParentheses("(()())(())(()(()))"));
console.log(removeOuterParentheses("()()"));

/**
 * Leet Code : 1021
 * Approach 1 :-> With Using Stacks
 * Approach 2 :-> Without Using Stacks
 */

