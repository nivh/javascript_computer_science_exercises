// @ts-check
"use strict"

/**
 * Queue constructor
 */
function Queue() {
    this.size = 0;
    this.first = null;
    this.last = null;
}

/**
 * Node constructor
 * @param {any} value 
 * @param {Node} next the next node (optional)
 */
function Node(value, next = null) {
    this.value = value;
    this.next = next;
}

/**
 * This function adds the value to the end of the queue. 
 * This should be an O(1) operation and return the size of the queue.
 * @param {any} value the value to add to the queue
 */
Queue.prototype.enqueue = function (value) {
    let n = new Node(value);
    this.last ? this.last.next = n : this.first = n;
    this.last = n;
    return ++this.size;
}

/**
 * This function removes the value at the beginning of the queue. 
 * This should be an O(1) operation and return the value removed.
 */
Queue.prototype.dequeue = function () {
    if (this.size === 0) return null; // empty Queue
    let val = this.first.value;
    this.first = this.first.next;
    if (!this.first) this.last = null; // was last Node
    this.size--;
    return val;
}

/**
 * This function returns the first value in the queue.
 */
Queue.prototype.peek = function () {
    return this.first ? this.first.value : null;
}

/**
 * Convert the queue to array, starting from first.
 */
Queue.prototype.toArray = function () {
    let n = this.first;
    let arr = [];
    while (n != null) {
        arr.push(n.value);
        n = n.next;
    }
    return arr;
}

/**
 * print the Queue to the console
 */
Queue.prototype.print = function () {
    console.log(`first -> ${this.first ? this.first.value : null}`);
    console.log(this.toArray().join(' -> '));
    console.log(`last -> ${this.last ? this.last.value : null}`);
}

// Debug
let q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.print();
console.log(`value= ${q.dequeue()}`);
q.print();
q.dequeue();
q.print();
q.dequeue();
q.print();