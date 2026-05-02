var swapPairs = function(head) {
    if(!head || !head.next) return head
    let ptr1 = head;
    while(ptr1 && ptr1.next){
        let temp1 = ptr1.val;
        ptr1.val = ptr1.next.val;
        ptr1.next.val = temp1;
        ptr1 = ptr1.next.next
    }
    return head
};

// Or

var swapPairs = function(head) {
    if(!head || !head.next) return head;
    let l = head;
    let r = head.next;

    l.next = swapPairs(r.next);
    r.next = l 
    return r;
};

/** 
 * Leet Code : 24
 *  Approach 1 :-> Iterative approach
 *  Approach 2 :-> Recursive approach
 */