var Node = function (val) {
    this.val = val;
    this.next = null;
}

var MyLinkedList = function () {
    this.head = null;
    this.size = 0;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    if (index < 0 || index >= this.size) return -1;
    let curr = this.head;
    for (let i = 0; i < index; i++) {
        curr = curr.next
    }
    return curr.val
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    let newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    let newNode = new Node(val);
    if (this.head === null) {
        this.head = newNode
    } else {
        let curr = this.head;
        while (curr.next != null) {
            curr = curr.next;
        }
        curr.next = newNode
    }
    this.size++;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index < 0 || index > this.size) return
    if (index === 0) {
        this.addAtHead(val)
    } else if (index === this.size) {
        this.addAtTail(val)
    } else {
        let newNode = new Node(val)
        let curr = this.head;
        for (let i = 0; i < index - 1; i++) {
            curr = curr.next
        }
        newNode.next = curr.next;
        curr.next = newNode;
        this.size++;
    }
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index < 0 || index >= this.size) return
    if (index === 0) {
        this.head = this.head.next
    } else {
        let curr = this.head;
        for (let i = 0; i < index - 1; i++) {
            curr = curr.next;
        }
        curr.next = curr.next.next;
    }

    this.size--;
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
/** 
 * Leet Code : 707
 *  Approach :-> Problem Statement: Design and implement a custom singly linked list class with the following Operations.
 * operations:
get(index): Return the value of the node at the specified index (0-indexed). If index is invalid, return -1.
addAtHead(val): Insert a node at the beginning of the list.
addAtTail(val): Append a node at the end of the list.
addAtIndex(index, val): Insert a node before the index-th node in the list.
deleteAtIndex(index): Delete the node at the given index.
Approach:
Use a custom Node class that holds val and next attributes.
Maintain a head pointer to the first node and a size to track the list length.
Each operation ensures index bounds are checked.
Traverse the list up to the required index using a loop.
All operations are implemented with time complexity O(n) in the worst case.
 */