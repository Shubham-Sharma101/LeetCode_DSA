var middleNode = function (head) {
    let slowPtr = head;
    let fastPtr = head;
    while (fastPtr !== null && fastPtr.next !== null) {
        slowPtr = slowPtr.next;
        fastPtr = fastPtr.next.next;
    }
    return slowPtr
}

console.log("Max Profit::::", middleNode([1, 2, 3, 4, 5]));
console.log("Max Profit::::", middleNode([1, 2, 3, 4, 5, 6]));

/** 
 * Leet Code : 876
 *  Approach 1 :-> Here we will use Slow & Fast Pointer Approach.
 * ptr1 will move 1 step & Ptr2 will move 2 Steps
 * Approach 2 :-> Convert LL into array & keep counting the elements. Divide size/2 and get the middle element.
 */