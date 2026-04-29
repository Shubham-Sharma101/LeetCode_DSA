var deleteDuplicates = function (head) {
    let curr = head;
    while (curr && curr.next) {
        if (curr.val === curr.next.val) {
            curr.next = curr.next.next
        } else {
            curr = curr.next
        }
    }
    return head
};

/** 
 * Leet Code : 83
 * * Here First Node will never be removed, So no need to take the sentinal Node 
 *  Approach 1 :-> Take Current as head, Check curr & Curr.next, if both are equal use our golden statement to remove -> curr.next = curr.next.next
 */