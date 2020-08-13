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