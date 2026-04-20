var moveZeroes = function (nums) {
    let len = nums.length, ptr1 = 0;
    for (let i = 0; i < len; i++) {
        if (nums[i] !== 0) {
            let temp = nums[ptr1]
            nums[ptr1] = nums[i]
            nums[i] = temp
            ptr1++
        }
    }
};

// Or

// But It will Fail in [1] this case
var moveZeroes = function (nums) {
    let len = nums.length, ptr1 = 0;
    for (let i = 0; i < len; i++) {
        if (nums[i] !== 0) {
            nums[ptr1] = nums[i]
            nums[i] = 0
            ptr1++
        }
    }
};

console.log("Final Ans::::", moveZeroes([0, 1, 0, 3, 12]));
console.log("Final Ans::::", moveZeroes([0]))

/** 
 * Leet Code : 283
 *  Approach : 2 Pointers -> Ptr1 will Keep track of the Location where Non-Zero value needs to be filled
 * Ptr2 will iterate and find Non-Zero Values 
 */