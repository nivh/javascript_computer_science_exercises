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