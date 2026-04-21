var isPowerOfTwo = function (n) {
    if (n === 1) return true
    if (n % 2 != 0 || n < 1) return false
    return isPowerOfTwo(n / 2)
};

console.log("Final Ans::::", missingNumber([3, 0, 1]));
console.log("Final Ans::::", missingNumber([0, 1]))


/** 
 * Leet Code : 231
 *  Approach 1 : Check if, n = 1 or (n < 1 & n % 2 != 0)
 */