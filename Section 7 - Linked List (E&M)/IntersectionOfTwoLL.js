var getIntersectionNode = function(headA, headB) {
    let hash = new Set()
    while(headA){
        hash.add(headA)
        headA = headA.next;
    }
    while(headB){
        if(hash.has(headB)){
            return headB
        }
        headB = headB.next
    }
    return null
};

/** 
 * Leet Code : 160
 *  Approach 1 :-> Brute Force : Take each Element from List 1 and check if it exist in List 2 for not
 *  Approach 2 :-> Using Hash Map/set.
 */