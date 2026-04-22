var binarySearch = function (nums, target) {
    let len = nums.length;
    let left = 0, right = len - 1;
    while (left <= right) {
        let middle = Math.floor((left + right) / 2)
        if (target === nums[middle]) {
            return middle;
        } else if (target < nums[middle]) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }
    return -1
}

console.log("Final Ans::::", binarySearch([-1, 0, 3, 5, 9, 12], 9));
console.log("Final Ans::::", binarySearch([-1, 0, 3, 5, 9, 12], 2))
console.log("Final Ans::::", binarySearch([5], 5))


/** 
 * Leet Code : 704
 *  Note : It can apply onlt to arrays, which are sorted. 
 *  Approach 1 : 
 */