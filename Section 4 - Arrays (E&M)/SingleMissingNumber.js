var singleNumber = function (nums) {
    let hash = {};
    for (let i = 0; i < nums.length; i++) {
        if (!hash[nums[i]]) {
            hash[nums[i]] = 1
        } else {
            hash[nums[i]]++
        }
        // Or
        hash[nums[i]] = (hash[nums[i]] || 0) + 1;
    }

    for (let i = 0; i < nums.length; i++) {
        if (hash[nums[i]] == 1) {
            return nums[i]
        }
    }
};

// or

var singleNumber = function (nums) {
    let xor = 0;
    for (let i = 0; i < nums.length; i++) {
        xor = xor ^ nums[i];
    }
    return xor
}

console.log("Final Ans::::", singleNumber([2, 2, 1,]));
console.log("Final Ans::::", singleNumber([4, 1, 2, 1, 2]))
console.log("Final Ans::::", singleNumber([1]))



/** 
 * Leet Code : 136
 *  Approach 1 : Create a Hash Map and create key with values, if it already exist increment it.
 *  Approach 2 : Using Bitwise XOR
 */