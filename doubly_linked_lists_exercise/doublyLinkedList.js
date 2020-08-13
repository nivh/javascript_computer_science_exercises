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