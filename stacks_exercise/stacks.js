"use strict";
/**
 * Stack constructor
 */
function Stack() {
    this.first=null;
    this.last=null;
    this.size=0;
}

/** 
 * Node constructor
 */
function Node(val, next=null) {
    this.value=val;
    this.next=next;
}

/**
 * Push a new value on top of the stack
 * @param {any} val New value to push to the stack
 */
Stack.prototype.push = function(val) {
    let newNode=new Node(val);
    this.first ? this.first.next=newNode : this.last=newNode;
    this.first=newNode;
    return ++this.size;
}