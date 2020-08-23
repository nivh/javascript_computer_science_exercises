// @ts-check
"use strict"

function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

function BinarySearchTree() {
    this.root = null;
}

/**
 * This function should insert a node in a binary tree. 
 * This should be solved using iteration.
 * @param {any} val Value to insert to the tree
 */
BinarySearchTree.prototype.insertIteratively = function (val) {
    let newNode = new Node(val);
    let n = this.root;
    if (n === null) {
        this.root = newNode;
        return this;
    }
    while (true) {
        if (val < n.value) {
            // search left branch
            if (n.left) {
                n = n.left;
            } else {
                n.left = newNode;
                return this;
            }
        } else {
            // search right branch
            if (n.right) {
                n = n.right;
            } else {
                n.right = newNode;
                return this;
            }
        }
    }
}

/**
 * insert a node in a binary tree. 
 * This should be solved using recursion.
 * @param {any} val value to insert to the tree
 */
BinarySearchTree.prototype.insertRecursively = function (val) {
    let newNode=new Node(val);
    if (this.root===null) {
        this.root=newNode;
        return this;
    }
    insertNode(newNode, this.root);
    return this;
    /**
     * Recursive function to insert a value into a general root node
     * @param {Node} newNode new node to insert
     * @param {Node} rootNode root node of tree
     */
    function insertNode (newNode, rootNode) {
        if (newNode.value < rootNode.value) {
            // search left branch
            rootNode.left ? insertNode(newNode, rootNode.left) : rootNode.left=newNode;
        } else {
            rootNode.right ? insertNode(newNode, rootNode.right) : rootNode.right=newNode;
        }
    }
}

/**
 * Print branch recursive function
 * @param {Node} node the root node from which to begin printing
 */
BinarySearchTree.prototype.printBranch = function (node) {
    if (node===null) return;
    console.log(node.value);
    if (node.left) this.printBranch(node.left);
    if (node.right) this.printBranch(node.right);
}

/**
 * Print the Binary Tree to the console
 */
BinarySearchTree.prototype.print = function () {
    this.printBranch(this.root);
}

// debug
let t=new BinarySearchTree();
t.insertIteratively(8);
t.insertIteratively(5);
t.insertIteratively(6);
t.insertIteratively(10);
t.insertIteratively(3);
t.print();