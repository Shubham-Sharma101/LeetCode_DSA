var isPalindrome = function (head) {
    //  Find Middle Element
    let slowPtr = fastPtr = head;
    while (fastPtr && fastPtr.next) {
        slowPtr = slowPtr.next;
        fastPtr = fastPtr.next.next;
    }
    // Reverse the Second Half
    let prev = null;
    let curr = slowPtr;
    while (curr) {
        let nextElement = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextElement;
    }

    // Compare Each Values
    let firstList = head;
    let secondList = prev;
    while (secondList) {
        if (firstList.val != secondList.val) {
            return false;
        }
        firstList = firstList.next;
        secondList = secondList.next;
    }
    return true;
};

/** 
 * Leet Code : 234
 *  Approach 1 :-> Convert LL into an array and check if array is pallindrome or not.
 *  Approach 2 :-> Find Middle Element, Reverse the Second half, then Compare each values
 */