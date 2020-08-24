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
    // @ts-ignore
    let newNode = new Node(val);
    let n = this.root;
    if (n === null) {
        this.root = newNode;
        return this;
    }
    while (true) {
        // @ts-ignore
        if (val < n.value) {
            // search left branch
            // @ts-ignore
            if (n.left) {
                // @ts-ignore
                n = n.left;
            } else {
                // @ts-ignore
                n.left = newNode;
                return this;
            }
        } else {
            // search right branch
            // @ts-ignore
            if (n.right) {
                // @ts-ignore
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
    let newNode = new Node(val);
    if (this.root === null) {
        this.root = newNode;
        return this;
    }
    insertNode(newNode, this.root);
    return this;
    /**
     * Recursive function to insert a value into a general root node
     * @param {Node} newNode new node to insert
     * @param {Node} rootNode root node of tree
     */
    function insertNode(newNode, rootNode) {
        if (newNode.value < rootNode.value) {
            // search left branch
            rootNode.left ? insertNode(newNode, rootNode.left) : rootNode.left = newNode;
        } else {
            rootNode.right ? insertNode(newNode, rootNode.right) : rootNode.right = newNode;
        }
    }
}

/**
 * find a node in a binary tree. 
 * It should return the node if found, otherwise return `undefined`. 
 * This should be solved using iteration.
 * @param {any} val value to search
 */
BinarySearchTree.prototype.findIteratively = function (val) {
    let n = this.root;
    while (n != null) {
        if (val === n.value) return n;
        if (val < n.value) {
            // left side
            if (n.left) { 
                n=n.left;
            } else { 
                return undefined;
            }
        } else {
            // right side
            if (n.right) {
                n=n.right 
            } else { 
                return undefined;
            }
        }
    }
}

BinarySearchTree.prototype.findRecursively = function (val) {
    return findNode(val, this.root);
    /**
     * Recursive function to find a value in a BinarySearchTree starting with rootNode
     * returns the Node if found, otherwise: undefined
     * @param {any} val value to find
     * @param {Node} rootNode Starting root node
     */
    function findNode (val, rootNode) {
        if (val === rootNode.value) return rootNode;
        if (val < rootNode.value) {
            // left branch
            if (rootNode.left) {
                return findNode (val, rootNode.left);
            } else {
                return undefined;
            }
        } else {
            // right branch
            if (rootNode.right) {
                return findNode(val, rootNode.right);
            } else {
                return undefined;
            }
        }
    }
}

/**
 * convert a binary search tree into an array of nodes from smallest to largest.
 */
BinarySearchTree.prototype.toArray = function() {
	if (this.root===null) return [];
	return nodeToArray(this.root);
	/**
	 * recursive function to convert a binary tree to array
	 * @param {Node} rootNode Root node of tree to convert to array
	 */
	function nodeToArray (rootNode) {
		let leftSide=[];
		let rightSide=[];
		if (rootNode.left) {
			leftSide=nodeToArray(rootNode.left);
		}
		if (rootNode.right) {
			rightSide=nodeToArray(rootNode.right);
		}
		leftSide.push(rootNode.value); // add the root node itself...
		return leftSide.concat(rightSide); // return left + root + right
	}
}

/**
 * search through each node in the binary search tree using pre-order depth first search and 
 * return an array containing each node's value.
 */
BinarySearchTree.prototype.DFSPreOrder = function () {
	let arr=[];
	traverse(this.root);
	return arr;
	function traverse (rootNode) {
		if (rootNode) arr.push(rootNode.value); // record the value
		if (rootNode.left) traverse(rootNode.left); // traverse the left branch
		if (rootNode.right) traverse(rootNode.right); // traverse the right branch
	}
}

/**
 * search through each node in the binary search tree using in-order depth first search and 
 * return an array containing each node's value.
 */
BinarySearchTree.prototype.DFSInOrder = function () {
	let arr=[];
	traverse(this.root);
	return arr;
	function traverse (rootNode) {
		if (rootNode.left) traverse(rootNode.left); // traverse the left branch
		if (rootNode) arr.push(rootNode.value); // record the value
		if (rootNode.right) traverse(rootNode.right); // traverse the right branch
	}
}

/**
 * search through each node in the binary search tree using post-order depth first search and 
 * return an array containing each node's value.
 */
BinarySearchTree.prototype.DFSPostOrder = function () {
	let arr=[];
	traverse(this.root);
	return arr;
	function traverse (rootNode) {
		if (rootNode.left) traverse(rootNode.left); // traverse the left branch
		if (rootNode.right) traverse(rootNode.right); // traverse the right branch
		if (rootNode) arr.push(rootNode.value); // record the value
	}
}

/**
 * search through each node in the binary search tree using breadth first search and 
 * return an array containing each node's value.
 */
BinarySearchTree.prototype.breadthFirstSearch = function() {
	let arr=[];
	let q=[this.root]; // Queue of nodes
	while (q.length>0) {
		let n=q.shift();
		if (n) {
			arr.push(n.value); // record the value
			if (n.left) q.push(n.left);
			// @ts-ignore
			if (n.right) q.push(n.right);
		}
	}
	return arr;
}

/**
 * finds and returns the Node with the minimum value on a branch.
 * (this is similar to finding the left most node within a branch);
 * this is a helper function for remove() method.
 * @param {Node} root the root of the branch to search
 */
function findMinInBST (root) {
	if (!root) return null;
	let n=root;
	while (n.left) {
		n=n.left;
	}
	return n;
}

/**
 * This function should remove a node from a binary search tree. 
 * Your remove function should be able to handle removal of the root node, removal of a node with one child and removal of a node with two children. 
 * The function should return the node removed.
 * @param {any} val value to remove from the tree
 */
BinarySearchTree.prototype.remove = function (val) {
	// find the Node with the value
	let n=this.findRecursively(val);
	if (!n) return undefined;

}

/**
 * Print branch recursive function
 * @param {Node} node the root node from which to begin printing
 */
BinarySearchTree.prototype.printBranch = function (node) {
    if (node === null) return;
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
let t = new BinarySearchTree();
t.insertIteratively(15);
t.insertIteratively(20);
t.insertIteratively(10);
t.insertIteratively(12);
t.insertIteratively(1);
t.insertIteratively(5);
t.insertIteratively(50);
console.log(t.toArray());
console.log(`min: ${findMinInBST(t.root.left).value}`);