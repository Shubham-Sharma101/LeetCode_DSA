var rotateRight = function (head, k) {
    if (!head || !head.next) return head
    let slowPtr = head;
    let fastPtr = head;
    let temp = head;
    let len = 0;
    while (temp) {
        temp = temp.next
        len++;
    }
    k = k % len;
    for (i = 0; i < k; i++) {
        fastPtr = fastPtr.next;
    }
    while (fastPtr.next) {
        slowPtr = slowPtr.next;
        fastPtr = fastPtr.next;
    }
    fastPtr.next = head;
    head = slowPtr.next
    slowPtr.next = null;
    return head
};

/** 
 * Leet Code : 61
 *  Approach 1 :-> Calculate Length of the LL
 * * K can greater than LL length, So we need to do Mod, For that we need Length,
 * * * Now Use SlowPtr & FastPtr.
 *  Approach 2 : Make it a Circular List & Loop K times & break the list from Kth position.
 */