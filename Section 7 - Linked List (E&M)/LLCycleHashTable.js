var hasCycle = function (head) {
    let seenNode = new Set();
    let curr = head;
    while (curr !== null) {
        if (seenNode.has(curr)) return true;
        seenNode.add(curr)
        curr = curr.next;
    }
    return false;
};

// Or

var hasCycle = function (head) {
    let slowPtr = head;
    let fastPtr = head.next;
    if (!head) return false
    while (slowPtr != fastPtr) {
        if (fastPtr === null || fastPtr.next === null) {
            return false
        }
        slowPtr = slowPtr.next;
        fastPtr = fastPtr.next.next;
    }
    return true;
}


console.log("Final Ans::::", hasCycle(head = [3, 2, 0, -4], pos = 1));
console.log("Final Ans::::", hasCycle(head = [1, 2], pos = 0));
console.log("Final Ans::::", hasCycle(head = [1], pos = -1));

/** 
 * Leet Code : 141
 *  Approach 1 :-> Using Hash Map
 *  Approach 2 :-> Floyd's Algorithm -> Tortoise & Hare Algorithm -> Slow & Fast Pointer -> if cycle exists, fast pointer will meet 
 *  slow pointer at some point.
 */