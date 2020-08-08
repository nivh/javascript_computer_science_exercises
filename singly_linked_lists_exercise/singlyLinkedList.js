function Node(val) {
    this.val = val;
    this.next = null;
}

function SinglyLinkedList() {
    this.head = null;
    this.tail = null;
    this.length = 0;
}

SinglyLinkedList.prototype.push = function (x) {
    let n = new Node(x); // create a new Node
    if (this.head === null) {
        // empty list.... point both head and tail to new Node.
        this.head = n;
        this.tail = n;
    } else {
        // add new node after the tail
        this.tail.next = n; // point the currently element at the tail to the new node
        this.tail=n; // point the tail at the new node
    }
    this.length++;
    return this; // to enable chaining
}


// l = new SinglyLinkedList;
// // node = new Node(15);
// l.push(5);

