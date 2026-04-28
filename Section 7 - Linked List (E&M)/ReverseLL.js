var reverseList = function (head) {
    let prev = null;
    let curr = head;
    while (curr !== null) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    head = prev;
    return head
};

console.log("Final Ans::::", reverseList([1, 2, 3, 4, 5]));
console.log("Final Ans::::", reverseList([1, 2]));

/** 
 * Leet Code : 206
 *  Approach 1 :-> Maintain 3 Pointer -> prev, curr, temp
 */