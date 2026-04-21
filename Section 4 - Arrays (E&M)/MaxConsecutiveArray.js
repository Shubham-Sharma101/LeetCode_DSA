var findMaxConsecutiveOnes = function (nums) {
    let maxCount = 0, currenCount = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            currenCount++
        } else {
            if (currenCount > maxCount) {
                maxCount = currenCount
            }
            currenCount = 0
        }
    }
    if (currenCount > maxCount) {
        maxCount = currenCount
    }
    return maxCount;
};

// Or

var findMaxConsecutiveOnes = function (nums) {
    let maxCount = 0, currenCount = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            currenCount++
        } else {
            maxCount = Math.max(currenCount, maxCount)
            currenCount = 0
        }
    }
    return Math.max(currenCount, maxCount);
};


console.log("Final Ans::::", findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
console.log("Final Ans::::", findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]))


/** 
 * Leet Code : 485
 *  Approach : 2 Pointers -> Take Two Pointers, Ptr1 is to check max count & Ptr2 is to check current count.
 *  Don't forget to check max value between current count & max count in last
 */