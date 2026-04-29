var removeNthFromEnd = function (head, n) {
    let sentinalNode = new ListNode();
    sentinalNode.next = head
    let length = 0;
    while (head) {
        head = head.next;
        length++;
    }
    let prevElement = length - n
    let prev = sentinalNode
    for (let i = 0; i < prevElement; i++) {
        prev = prev.next
    }
    prev.next = prev.next.next;
    return sentinalNode.next
};

// Or

var removeNthFromEnd = function (head, n) {
    let sentinalNode = new ListNode(0,head);
    let firstPtr = sentinalNode
    for (let i = 0; i < n; i++) {
        firstPtr = firstPtr.next
    }
    let secondPtr = sentinalNode
    while (firstPtr.next) {
        firstPtr = firstPtr.next;
        secondPtr = secondPtr.next;
    }
    secondPtr.next = secondPtr.next.next;
    return sentinalNode.next;
};

/** 
 * Leet Code : 19
 * * When Ever there is deleting of Node, Always keep Sentinal Node in your Mind.
 * * When Ever we are deleting the Node in Linked List we need to know the prev element.
 *  Approach 1 :-> Iterate through LL to get the Length and then delete the element. -> Two Pass Approach
 *  Approach 2 :-> Use Two Pointer Approach, Keep First Ptr and Second Ptr difference = n  -> One Pass Approach
 */