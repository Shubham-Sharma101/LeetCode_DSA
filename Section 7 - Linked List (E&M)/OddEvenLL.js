var oddEvenList = function (head) {
    if (!head || !head.next) return head;
    let odd = head;
    let even = head.next;
    let evenStart = even;

    while (odd.next && even.next) {
        odd.next = odd.next.next;
        odd = odd.next;
        even.next = even.next.next;
        even = even.next;
    }
    odd.next = evenStart;
    return head;
};

// Or

var oddEvenList = function (head) {
    if (!head || !head.next) return head;
    let odd = head;
    let even = head.next;
    let evenHead = even;

    while (even && even.next) {
        odd.next = even.next;
        odd = odd.next;
        even.next = odd.next;
        even = even.next;
    }
    odd.next = evenHead;
    return head;
};

/** 
 * Leet Code : 328
 *  Approach 1 :-> Link odd Node with next odd Node and Even with next Even Node and then connect last odd Node with 1st even Node
 */