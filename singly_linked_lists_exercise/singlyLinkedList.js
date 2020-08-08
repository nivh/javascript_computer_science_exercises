function Node(val) {
    this.val = val;
    this.next = null;
}

function SinglyLinkedList() {
    this.head = null;
    this.tail = null;
    this.length = 0;
}

SinglyLinkedList.prototype.push = function(x) {
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

SinglyLinkedList.prototype.pop = function() {
    if (this.tail === null) return undefined; // empty list. nothing to pop. leave me alone.... here, take a undefined.
    // becasue this is a SINGLE linked list, we cannot know what is the node just before the last one...
    // so we need to start from the head, and search for the last item to know what is one before the last
    let lst=null;
    let i=this.head;
    while (i!=this.tail) {
        lst=i;
        i=i.next;
    }
    this.last=lst;
    if (lst===null) {
        // it was last item... set head to null too
        this.head=null;
    }
    this.length--;
    return i.val;
}

// l = new SinglyLinkedList;
// node = new Node(15);
// l.push(5).push(10).push(15).push(20);
// l.push(-3);
// let nd=l.pop();
// console.log(nd);

