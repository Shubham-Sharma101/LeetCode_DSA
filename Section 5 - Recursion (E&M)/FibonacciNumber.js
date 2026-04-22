var fib = function (n) {
    if (n <= 1) return n
    return fib(n - 1) + fib(n - 2)
};

// Or

var fib = function (n) {
    if (n <= 1) return n
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

console.log("Final Ans::::", missingNumber(2));
console.log("Final Ans::::", missingNumber(3))
console.log("Final Ans::::", missingNumber(4))


/** 
 * Leet Code : 509
 *  Approach 1 : With Recursion
 *  Approach 2 : With For Loop
 */