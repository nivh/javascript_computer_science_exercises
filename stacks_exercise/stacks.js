// @ts-check
"use strict";
/**
 * Stack constructor
 */
function Stack() {
    this.first = null;
    this.last = null;
    this.size = 0;
}

/** 
 * Node constructor
 */
function Node(val, next = null) {
    this.value = val;
    this.next = next;
}

/**
 * Push a new value on top of the stack
 * @param {any} val New value to push to the stack
 */
Stack.prototype.push = function (val) {
    let newNode = new Node(val, this.first);
    if (this.size===0) this.last=newNode; // was empty list
    this.first = newNode;
    return ++this.size;
}

/**
 * Pop value from top of the stack
 */
Stack.prototype.pop = function () {
    if (this.first === null) return null; // empty stack
    let val = this.first.value;
    this.first = this.first.next;
    if (!this.first) this.last = null; // was last node
    this.size--;
    return val;
}


// Debug
let s=new Stack();
s.push(10);
s.push(100);
s.push(1000);
var r = s.pop()
s.pop();
s.pop();
console.log(s.size);