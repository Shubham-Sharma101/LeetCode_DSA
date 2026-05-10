var MinStack = function () {
  this.s = [];
  this.minval;
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  if (this.s.length === 0) {
    this.s.push([val, val]);
  } else {
    let lastMinVal = this.s[this.s.length - 1][1];
    let minVal = Math.min(val, lastMinVal);
    this.s.push([val, minVal]);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.s.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.s[this.s.length-1][0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.s[this.s.length - 1][1];
};
/**
 * Leet Code : 155
 *  Approach 1 :->
 */
