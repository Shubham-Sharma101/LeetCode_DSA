var removeElement = function (nums, val) {
    let ptr1 = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != val) {
            nums[ptr1] = nums[i]
            ptr1++
        }
    }
    return nums
};

console.log("Final Ans::::", removeElement([3, 2, 2, 3], 3));
console.log("Final Ans::::", removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2))

/** 
 * Leet Code : 27
 *  Approach : 2 Pointers -> Ptr1 will keep track of position where we need to shift Values not equal to val
 *  & Ptr2 will iterate the array to find Value not equal to val 
 */