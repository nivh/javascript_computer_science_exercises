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

/**
 * This function should add a node to the beginning of the SinglyLinkedList. It should return the list so that the method can be chained.
 */
SinglyLinkedList.prototype.unshift = function(x) {
    let n = new Node(x);
    if (this.head===null) {
        // empty list
        this.head=n;
        this.tail=n;
    } else {
        n.next=this.head;
        this.head=n;
    }
    this.length++;
    return this;
}

/**
 * removes a node at the beginning of the list and decrements the length of the list.
 * This function should remove a node at the beginning of the SinglyLinkedList. It should return the node removed.
 */
SinglyLinkedList.prototype.shift = function () {
    if (this.head===null) return undefined; // empty list
    let firstNode=this.head;
    this.head=this.head.next; // move head to the next node
    if (this.tail===this.head) this.tail=null; // if list got empty
    this.length--;
    return firstNode.val;
}

/**
 * This function should update the value of a node at a given index of the SinglyLinkedList. 
 * It should return true if the node is updated successfully, or false if an invalid index is passed in.
 * note: the list is expected to be starting from index=1 (not 0!) - according to the tests
 * @param {number} index 
 * @param {any} newValue 
 */
SinglyLinkedList.prototype.set = function (index,newValue) {
    let node=this._getNode(index);
    if (node===null) return false;
    node.val=newValue 
    return true;
}

/**
 * This internal/helper function should find a node at a specified (zero based) index in a SinglyLinkedList. It should return the found node.
 * @param {number} index 
 */
SinglyLinkedList.prototype.get = function (index) {
    let node = this._getNode(index); 
    return node? node.val : null;
}

/**
 * Inner function that returns the node at a given (zero based) index.
 * returns null if the index is invalid.
 * @param {number} index the index of the node to retrieve
 */
SinglyLinkedList.prototype._getNode = function(index) {
    if (index<0 || index >= this.length) {
        return null;
    }
    let node = this.head;
    for (var i=0; i<index; i++) {
        node=node.next;
    }
    return node;
}

/**
 * This internal/helper function should insert a node at a specified index in a SinglyLinkedList. It should return the new length of the SinglyLinkedList.
 * @param {number} index 
 * @param {any} newValue 
 */
SinglyLinkedList.prototype.insert = function (index, newValue) {
    if (this.length===0) {
        // empty list.... just use push
        this.push(newValue);
        return 0;
    }
    let existingNode = this._getNode(index-1); // get the one before the insertion point, so we can set it's "next" property to the new node
    if (existingNode===null) return this.length;
    let newNode = new Node(newValue);
    newNode.next=existingNode.next;
    existingNode.next=newNode;
    this.length++;
    return this.length;
}

l = new SinglyLinkedList;
l.push(5).push(10).push(15).push(20);
l.insert(2,12);
for (var i=0; i<l.length+1; i++) {
    console.log (l.get(i));
}


// node = new Node(15);
// l.push(5).push(10).push(15).push(20);
// l.push(-3);
// let nd=l.pop();
// console.log(nd);

