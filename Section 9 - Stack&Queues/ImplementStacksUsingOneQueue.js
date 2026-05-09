var MyStack = function () {
  this.q = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.q.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  let n = this.q.length;
  for (let i = 0; i < n - 1; i++) {
    const frontEle = this.q.shift();
    this.q.push(frontEle);
  }
  return this.q.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  let n = this.q.length;
  for (let i = 0; i < n - 1; i++) {
    const frontEle = this.q.shift();
    this.q.push(frontEle);
  }
  let ans = this.q.shift();
  this.q.push(ans);
  return ans;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.q.length === 0;
};

/**
 * Leet Code : 225
 */
