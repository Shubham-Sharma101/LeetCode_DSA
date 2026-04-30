var addTwoNumbers = function (l1, l2) {
    let ans = new ListNode();
    let ansHead = ans;
    let carry = 0;
    while (l1 || l2 || carry) {
        let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        carry = Math.floor(sum / 10);
        let digit = sum % 10

        let newNode = new ListNode(digit);
        ans.next = newNode
        ans = ans.next
        l1 = l1 && l1.next;
        l2 = l2 && l2.next;
    }
    return ansHead.next
};

/** 
 * Leet Code : 2
 *  Approach 1 :-> Create a dummy Node for list 3 and store its head.
 */