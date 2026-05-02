var mergeTwoLists = function (l1, l2) {
    if (!l1) return l2
    if (!l2) return l1

    let start = new ListNode()
    let curr = start;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            curr.next = l1;
            l1 = l1.next
        } else {
            curr.next = l2;
            l2 = l2.next
        }
        curr = curr.next
    }
    if (!l1) curr.next = l2
    if (!l2) curr.next = l1;
    return start.next;
};

/** 
 * Leet Code : 21
 *  Approach 1 :-> Take Dummy Node to handle edge cases like l1 or l2 = empty and Keep track of Head
 */