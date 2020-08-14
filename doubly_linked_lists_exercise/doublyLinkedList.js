function Node(val){
    this.val = val;
    this.prev = null;
    this.next = null;
}

function DoublyLinkedList(){
    this.head = null;
    this.tail = null;
    this.length = 0;
}

/**
 * Generate array from the list
 */
DoublyLinkedList.prototype.toArray = function (){
	let arr=[];
	let n=this.head;
	while (n!=null) {
		arr.push(n.val);
		n=n.next;
	}
	return arr;
}

/**
 * prints the list to the console in one line
 */
DoublyLinkedList.prototype.printList = function () {
	console.log(this.toArray().join(','));
}

/**
 * add a node to the end of the DoublyLinkedList. 
 * return the new list so that the method can be chained.
 * @param {any} val 
 */
DoublyLinkedList.prototype.push = function (val) {
   let newNode=new Node(val);
    // empty list?
   if (this.length === 0) {
       this.head=newNode;
   } else {
    	this.tail.next=newNode;
   }
   newNode.prev=this.tail;
   this.tail=newNode;
   this.length++;
   return this;
}

/**
 * This function should remove a node at the end of the DoublyLinkedList. 
 * It should return the node removed.
 */
DoublyLinkedList.prototype.pop = function () {
	if (this.length === 0) return undefined; // empty list
	let val=this.tail.val; // save the tail node value to return
	if (this.tail.prev != null) {
		this.tail.prev.next=null;
		this.tail=this.tail.prev;
	} else {
		// it was the last node
		this.tail=null;
		this.head=null;
	}
	this.length--;
	return val;
}

/**
 * This function should add a node to the beginning of the DoublyLinkedList. 
 * It should return the list so that the method can be chained.
 * @param {any} val new value to add to the beginning of the list
 */
DoublyLinkedList.prototype.unshift = function (val) {
	let newNode = new Node(val);
	if (this.length===0) {
		// empty list
		this.tail=newNode; // set tail to also point to the new node
	} else {
		// at least 1 node exist... point it's prev to the new node
		this.head.prev=newNode;
		newNode.next=this.head;
	}
	this.head=newNode;
	this.length++;
	return this;
}

/**
 * This function should remove a node at the beginning of the DoublyLinkedList. 
 * It should return the node removed.
 */
DoublyLinkedList.prototype.shift = function () {
	if (this.length === 0) return undefined; // empty list
	let val=this.head.val; // save the head node value to return
	if (this.head.next != null) {
		this.head.next.prev=null;
		this.head=this.head.next;
	} else {
		// it was the last node
		this.tail=null;
		this.head=null;
	}
	this.length--;
	return val;
}

/**
 * This function should find a node and replace its val or return undefined if the node is not found.
 * @param {number} index the index of the node
 * @param {any} val vlaue to set
 */
DoublyLinkedList.prototype.set = function (index, val) {
	let n=this.findNode(index);
	if (n===undefined) return undefined;
	n.val=val;
	return;
}

/**
 * find a node at a specified index in a DoublyLinkedList. 
 * It should return the found node, or null if not.
 * @param {number} index index of the node to retrieve it's value
 */
DoublyLinkedList.prototype.get = function (index) {
	let n=this.findNode(index);
	if (n===undefined) return null;
	return n.val;
}

/**
 * insert a node at a specified index in a DoublyLinkedList.
 * return the new length of the DoublyLinkedList.
 * @param {number} index index of the node to be inserted upon
 * @param {any} val value of the new node
 */
DoublyLinkedList.prototype.insert = function (index, val) {
	let n=this.findNode(index);
	if (n===undefined) {
		return this.length;
	}
	let newNode=new Node(val);
	newNode.next=n;
	if (n.prev === null) {
		// newNode will be first in the list
		this.head=newNode;
		n.prev=newNode;
	} else {
		// connect prev node.next to newNode
		n.prev.next=newNode;
		newNode.prev=n.prev;
		n.prev=newNode;
	}
	this.length++;
	return this.length;
}

/**
 * remove a node at a specified index in a DoublyLinkedList.
 * return the removed node (or undefined if not found)
 * @param {number} index the index of the node to be removed from the list
 */
DoublyLinkedList.prototype.remove = function(index) {
	let n=this.findNode(index);
	if (n===undefined) return undefined;
	this.length--;
	if (this.head===this.tail) {
		// it was the last node, empty the list:
		this.head=null;
		this.tail=null;
		return n.val;
	}
	if (n===this.head) {
		// remove first node
		this.head=n.next;
		n.next.prev=null;
	} else if (n===this.tail) {
		// remove last node
		this.tail=n.prev;
		n.prev.next=null;
	} else {
		// there are nodes on both sides... connect prev to next
		n.prev.next=n.next;
		n.next.prev=n.prev;
	}
	return n.val
}

/**
 * Flip values ov node between prev and next
 * @param {Node} node the node to flip values to
 */
function flip(node) {
	let dumy=node.next;
	node.next=node.prev;
	node.prev=dumy;
}

/**
 * reverse all of the nodes in a DoublyLinkedList.
 * return the reversed DoublyLinkedList.
 */
DoublyLinkedList.prototype.reverse = function () {
	if (this.length<=1) return this; // nothing changes in 1 or 0 length list...
	// flip all connections
	let cur=this.head;
	while (cur != null){
		flip(cur);
		cur=cur.prev; // cause of the flip...
	}
	// flip head <-> tail
	let dumy=this.head;
	this.head=this.tail;
	this.tail=dumy;
	return this;
}

/**
 * Helper function.
 * Try to find the node at index.
 * returns undefined if node is not found.
 * @param {number} index index of the node to find
 */
DoublyLinkedList.prototype.findNode = function (index) {
	let len=this.length;
	if (index >= len) return undefined; // index is larger then the length of the list
	if (index > len/2) {
		// search from tail backwards
		let n=this.tail;
		for (var i=len-1; i>index; i--){
			n=n.prev;
		}
		return n;
	}
	// search from head forwards
	let n=this.head;
	for (var i=0; i<index; i++){
		n=n.next;
	}
	return n;
}

/**
 * creates an array from the list and returns it
 * head->null
 */
DoublyLinkedList.prototype.toArray = function(){
	let arr=[];
	let n=this.head;
	while (n!=null) {
		arr.push(n.val);
		n=n.next;
	}
	return arr;
}

/**
 * creates an inversed array from the list and returns it
 * null <- tail
 */
DoublyLinkedList.prototype.toInversedArray = function(){
	let arr=[];
	let n=this.tail;
	while (n!=null) {
		arr.push(n.val);
		n=n.prev;
	}
	return arr;
}

/**
 * General checks of the list's health:
 * 1) compare 2 arrays to eachother - regular and reversed.
 * 2) check that tail.next === null
 * 3) check that head.prev === null
 * returns true if check is OK, otherwise- false
 */
DoublyLinkedList.prototype.sanityCheck = function(){
	if (this.tail && this.tail.next != null) return false;
	if (this.head && this.head.prev != null) return false;
	if (JSON.stringify(this.toArray()) != JSON.stringify(this.toInversedArray().reverse())) return false;
	return true;
}

let l=new DoublyLinkedList;
l.push(1).push(2).push(3);
// console.log(l.toArray());
// console.log(l.toInversedArray());
l.reverse();
let arr=l.toArray();
console.log(arr);