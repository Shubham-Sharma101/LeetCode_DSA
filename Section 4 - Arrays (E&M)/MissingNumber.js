var missingNumber = function (nums) {
    let n = nums.length;
    let totalSum = n * (n + 1) / 2

    let partialSum = 0;

    for (let i = 0; i < n; i++) {
        partialSum = partialSum + nums[i]
    }
    return totalSum - partialSum
};

console.log("Final Ans::::", missingNumber([3, 0, 1]));
console.log("Final Ans::::", missingNumber([0, 1]))


/** 
 * Leet Code : 268
 *  Approach 1 : Brute Force -> Sort this array and find the Missing number
 *  Approach 2 : We already know "n", we can do n (n+1)/2 to find the Missing number
 */