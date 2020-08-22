"use strict"

/**
 * Queue constructor
 */
function Queue() {
    this.size=0;
    this.first=null;
    this.last=null;
}

/**
 * Node constructor
 * @param {any} value 
 * @param {Node} next the next node (optional)
 */
function Node(value, next=null) {
    this.value=value;
    this.next=next;
}

/**
 * This function adds the value to the end of the queue. 
 * This should be an O(1) operation and return the size of the queue.
 * @param {any} value the value to add to the queue
 */
Queue.prototype.enqueue = function(value){
    let n=new Node(value);
    this.last ? this.last.next=n : this.first=n;
    this.last=n;
    return ++this.size;
}