var largestOddNumber = function (num) {
    let n = num.length - 1;
    while (n >= 0) {
        if (Number(num[n]) % 2 == 1) {
            return num.substring(0, n + 1)
        }
        n--;
    }
    return ""
};
console.log("Ans::::::", largestOddNumber("52"));
console.log("Ans::::::", largestOddNumber("4206"));
console.log("Ans::::::", largestOddNumber("35427"));

/** 
 * Leet Code : 1903
 *  Approach 1 :-> Start from Last and return if encounter any  odd number
 */