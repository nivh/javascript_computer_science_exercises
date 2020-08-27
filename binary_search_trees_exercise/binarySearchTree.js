// @ts-check
"use strict"

function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.spaces=0; // number of chars in value. this is used for printing the tree
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
                n = n.left;
            } else {
                return undefined;
            }
        } else {
            // right side
            if (n.right) {
                n = n.right
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
    function findNode(val, rootNode) {
        if (val === rootNode.value) return rootNode;
        if (val < rootNode.value) {
            // left branch
            if (rootNode.left) {
                return findNode(val, rootNode.left);
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
BinarySearchTree.prototype.toArray = function () {
    if (this.root === null) return [];
    return nodeToArray(this.root);
	/**
	 * recursive function to convert a binary tree to array
	 * @param {Node} rootNode Root node of tree to convert to array
	 */
    function nodeToArray(rootNode) {
        let leftSide = [];
        let rightSide = [];
        if (rootNode.left) {
            leftSide = nodeToArray(rootNode.left);
        }
        if (rootNode.right) {
            rightSide = nodeToArray(rootNode.right);
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
    let arr = [];
    if (this.root) traverse(this.root);
    return arr;
    function traverse(rootNode) {
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
    let arr = [];
    if (this.root) traverse(this.root);
    return arr;
    function traverse(rootNode) {
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
    let arr = [];
    if (this.root) traverse(this.root);
    return arr;
    function traverse(rootNode) {
        if (rootNode.left) traverse(rootNode.left); // traverse the left branch
        if (rootNode.right) traverse(rootNode.right); // traverse the right branch
        if (rootNode) arr.push(rootNode.value); // record the value
    }
}

/**
 * search through each node in the binary search tree using breadth first search and 
 * return an array containing each node's value.
 */
BinarySearchTree.prototype.breadthFirstSearch = function () {
    let arr = [];
    let q = [this.root]; // Queue of nodes
    while (q.length > 0) {
        let n = q.shift();
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
function findMinInBST(root) {
    if (!root) return null;
    let n = root;
    while (n.left) {
        n = n.left;
    }
    return n;
}

/**
 * This function should remove a node from a binary search tree recursively
 * Your remove function should be able to handle removal of the root node, removal of a node with one child and removal of a node with two children. 
 * The function should return the node removed.
 * @param {any} val value to remove from the tree
 */
BinarySearchTree.prototype.remove = function (val) {
    // find the Node with the value
    //let nodeToRemove = this.findRecursively(val);
    //if (!nodeToRemove) return null; // node does not exist in this tree
    // todo: make a recursive remove node from branch, that also finds the node to be removed
    this.root = removeNode(val, this.root);

    function removeNode(val, root) {
        if (val < root.value) {
            // left branch search
            if (root.left) {
                root.left = removeNode(val, root.left);
            } // else - val does not exist. should do anything?
        } else if (val > root.value) {
            // right branch search
            if (root.right) {
                root.right = removeNode(val, root.right);
            } // else - val does not exist. should do anything?
        } else {
            // Node to be removed found!
            // deal with 3 cases:
            // 1) no childs - just return null
            if (!root.left && !root.right) return null;
            // 2) 1 child - return this 1 child
            if ((root.left === null) != (root.right === null)) { // XOR look alike
                if (root.left) return root.left;
                if (root.right) return root.right;
            }
            // 3) 2 childs - return the successor - search the right branch for the left most node (IE: min value) and replace the root note with it
            // find the successor:
            let suc = findMinInBST(root.right);
            root.value = suc.value; // replcace the value of the root 
            // remove suc (which is duplicated now)
            root.right = removeNode(suc.value, root.right);
        }
        return root;
    }
}



/**
 * Print the Binary Tree to the console
 * note: doesn't work well at all :-(
 */
BinarySearchTree.prototype.printFail = function () {
    let line = '';
    let spaces = 60;
    // will try to use "Breadth First Traverse"
    let q = [{ node: this.root, spaces: spaces }]; // Queue of nodes
    while (q.length > 0) {
        let obj = q.shift();
        if (obj.node) {
            // record the value
            if (obj.spaces != spaces) {
                // reached new level
                console.log(line);
                line = ''; // new line
                spaces = obj.spaces;
            }
            const spcacesFill = Array(Math.floor(obj.spaces)).join(' '); // creates spaces 
            line += spcacesFill + obj.node.value + spcacesFill;
            if (obj.node.left || obj.node.right) {
                obj.node.left ? q.push({ node: obj.node.left, spaces: obj.spaces / 2 }) : q.push({ node: new Node('  '), spaces: obj.spaces / 2 });
                obj.node.right ? q.push({ node: obj.node.right, spaces: obj.spaces / 2 }) : q.push({ node: new Node('  '), spaces: obj.spaces / 2 });
            }
        }
    }
    if (line.length > 0) console.log(line); // remains
}

/**
 * Recursive function to calculate and fill the Node.spaces as preparation for print
 * function returns the number of spaces this root has
 * @param {Node} root the root node
 */
BinarySearchTree.prototype.calculateSpaces = function (root=this.root) {
    // if root not exist - return 0. (not suppose to happen - just to be robust)
    if (!root) return 0;
    // if leaf - return the value's length
    if (!root.left && !root.right) {
        root.spcaces = root.value.toString().length;
        return root.spcaces;
    }
    if (root.left) root.spaces+=this.calculateSpaces(root.left); // recursive call to left branch
    if (root.right) root.spaces+=this.calculateSpaces(root.right); // recursive call to right branch
    root.spaces+=root.value.toString().length; // add the nodes value width 
}

/**
 * Prints the tree to the console
 */
BinarySearchTree.prototype.print = function () {
    this.calculateSpaces();
    
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
t.insertIteratively(60);
t.insertIteratively(30);
t.insertIteratively(25);
t.insertIteratively(23);
t.insertIteratively(24);
t.insertIteratively(70);
t.insertIteratively(55);
//t.insertIteratively(3);
//t.insertIteratively(5);
//t.insertIteratively(7);
//console.log(t.toArray());
//console.log(`min: ${findMinInBST(t.root.left).value}`);
// console.log(`Before remove: ${t.DFSInOrder()}`);
// t.remove(51);
// console.log(`After remove : ${t.DFSInOrder()}`);
t.print();
