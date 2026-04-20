var merge = function (nums1, m, nums2, n) {
    let nums1Copy = nums1.slice(0, m)
    let ptr1 = 0, ptr2 = 0;
    for (let i = 0; i < nums1.length; i++) {
        if (ptr2 >= n || (nums1Copy[ptr1] < nums2[ptr2] && ptr1 < m)) {
            nums1[i] = nums1Copy[ptr1]
            ptr1++
        } else {
            nums1[i] = nums2[ptr2]
            ptr2++
        }
    }
    return nums1
};

// Or

var merge = function (nums1, m, nums2, n) {
    let ptr1 = m - 1, ptr2 = n - 1;
    for (let i = m + n - 1; i >= 0; i--) {
        if (ptr2 < 0 || (nums1[ptr1] > nums2[ptr2] && ptr1 >= 0)) {
            nums1[i] = nums1[ptr1]
            ptr1--
        } else {
            nums1[i] = nums2[ptr2]
            ptr2--
        }
    }
    return nums1
}

// Or

var merge = function (nums1, m, nums2, n) {
    let ptr1 = m - 1, ptr2 = n - 1;
    for (let i = m + n - 1; i >= 0; i--) {
        if(ptr2 < 0) break;
        if (nums1[ptr1] > nums2[ptr2] && ptr1 >= 0) {
            nums1[i] = nums1[ptr1]
            ptr1--
        } else {
            nums1[i] = nums2[ptr2]
            ptr2--
        }
    }
    return nums1
}
console.log("Final Ans::::", merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.log("Final Ans::::", merge([1], 1, [], 0))


/** 
 * Leet Code : 88
 *  Approach : 2 Pointers -> Ptr1 & Ptr2 will keep track of both arrays
 */