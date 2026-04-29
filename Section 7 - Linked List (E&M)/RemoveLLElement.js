var removeElements = function(head, val) {
    let sentinalNode = new ListNode();
    sentinalNode.next = head;
    let prev = sentinalNode
    while(prev && prev.next){
        if(prev.next.val === val){
            prev.next = prev.next.next;
        }else{
            prev = prev.next
        }
    }
    return sentinalNode.next;
};

/** 
 * Leet Code : 203
 *  Approach 1 :-> Add Sentinal Node, It Helps us deleting the head Node
 * Also keep track of prev element, if you wants to delete the next element.
 */