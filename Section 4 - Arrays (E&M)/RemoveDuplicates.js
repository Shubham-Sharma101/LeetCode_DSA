var removeDuplicates = function (nums) {
    let ptr1 = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > nums[ptr1]) {
            ptr1++;
            nums[ptr1] = nums[i];
        }
    }
    return ptr1 + 1;
};

// or

var removeDuplicates = function (nums) {
    let ptr1 = 0, ptr2 = 0;
    while (ptr2 < nums.length) {
        if (nums[ptr1] !== nums[ptr2]) {
            ptr1++;
            nums[ptr1] = nums[ptr2];
        }
        ptr2++
    }
    return ptr1 + 1;
};

console.log("Final Ans::::", removeDuplicates([1, 1, 2]));
console.log("Final Ans::::", removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));



/** 
 * Leet Code : 26
 *  Approach : 2 Pointers -> Ptr1 will keep track of location where Unique element needs to be put
 *  & Ptr2 will iterate the array to find Unique Elements 
 */
