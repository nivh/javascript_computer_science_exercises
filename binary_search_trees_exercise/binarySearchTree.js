// @ts-check
"use strict"
// draw unicode frame chars consts:
// https://unicode-table.com/en/#2513
const LINE_UP_LEFT_RIGHT = '\u253B'; 	// ┻
const LINE_LEFT_RIGHT = '\u2501'; 		// ━
const LINE_DOWN_RIGHT = '\u250F'; 		// ┏
const LINE_DOWN_LEFT = '\u2513'; 		// ┓
const LINE_UP_RIGHT = '\u2517'; 		// ┗
const LINE_UP_LEFT = '\u251B'; 			// ┛

// console.log(LINE_DOWN_RIGHT + LINE_UP_LEFT_RIGHT + LINE_LEFT_RIGHT + LINE_DOWN_LEFT); 	// ┏┻━┓
// console.log(LINE_UP_LEFT + '  ' + LINE_UP_RIGHT);										// ┛  ┗

function TreeNode(value) {
	this.value = value;
	this.left = null;
	this.right = null;
	this.depth = 0; // depth of TreeNode. root is 1. currently will be filled only for printing purpose
	this.width = 0; // total width of the Node. this is used for printing the tree.
	this.location = 0; // location of the parent Node link
}

function BinarySearchTree() {
	this.root = null;
}

/**
 * This function should insert a TreeNode in a binary tree. 
 * This should be solved using iteration.
 * @param {any} val Value to insert to the tree
 */
BinarySearchTree.prototype.insertIteratively = function (val) {
	// @ts-ignore
	let newTreeNode = new TreeNode(val);
	let n = this.root;
	if (n === null) {
		this.root = newTreeNode;
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
				n.left = newTreeNode;
				return this;
			}
		} else {
			// search right branch
			// @ts-ignore
			if (n.right) {
				// @ts-ignore
				n = n.right;
			} else {
				n.right = newTreeNode;
				return this;
			}
		}
	}
}

/**
 * insert a TreeNode in a binary tree. 
 * This should be solved using recursion.
 * @param {any} val value to insert to the tree
 */
BinarySearchTree.prototype.insertRecursively = function (val) {
	let newTreeNode = new TreeNode(val);
	if (this.root === null) {
		this.root = newTreeNode;
		return this;
	}
	insertTreeNode(newTreeNode, this.root);
	return this;
	/**
	 * Recursive function to insert a value into a general root TreeNode
	 * @param {TreeNode} newTreeNode new TreeNode to insert
	 * @param {TreeNode} rootTreeNode root TreeNode of tree
	 */
	function insertTreeNode(newTreeNode, rootTreeNode) {
		if (newTreeNode.value < rootTreeNode.value) {
			// search left branch
			rootTreeNode.left ? insertTreeNode(newTreeNode, rootTreeNode.left) : rootTreeNode.left = newTreeNode;
		} else {
			rootTreeNode.right ? insertTreeNode(newTreeNode, rootTreeNode.right) : rootTreeNode.right = newTreeNode;
		}
	}
}

/**
 * find a TreeNode in a binary tree. 
 * It should return the TreeNode if found, otherwise return `undefined`. 
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
	return findTreeNode(val, this.root);
	/**
	 * Recursive function to find a value in a BinarySearchTree starting with rootTreeNode
	 * returns the TreeNode if found, otherwise: undefined
	 * @param {any} val value to find
	 * @param {TreeNode} rootTreeNode Starting root TreeNode
	 */
	function findTreeNode(val, rootTreeNode) {
		if (val === rootTreeNode.value) return rootTreeNode;
		if (val < rootTreeNode.value) {
			// left branch
			if (rootTreeNode.left) {
				return findTreeNode(val, rootTreeNode.left);
			} else {
				return undefined;
			}
		} else {
			// right branch
			if (rootTreeNode.right) {
				return findTreeNode(val, rootTreeNode.right);
			} else {
				return undefined;
			}
		}
	}
}

/**
 * convert a binary search tree into an array of TreeNodes from smallest to largest.
 */
BinarySearchTree.prototype.toArray = function () {
	if (this.root === null) return [];
	return TreeNodeToArray(this.root);
	/**
	 * recursive function to convert a binary tree to array
	 * @param {TreeNode} rootTreeNode Root TreeNode of tree to convert to array
	 */
	function TreeNodeToArray(rootTreeNode) {
		let leftSide = [];
		let rightSide = [];
		if (rootTreeNode.left) {
			leftSide = TreeNodeToArray(rootTreeNode.left);
		}
		if (rootTreeNode.right) {
			rightSide = TreeNodeToArray(rootTreeNode.right);
		}
		leftSide.push(rootTreeNode.value); // add the root TreeNode itself...
		return leftSide.concat(rightSide); // return left + root + right
	}
}

/**
 * search through each TreeNode in the binary search tree using pre-order depth first search and 
 * return an array containing each TreeNode's value.
 */
BinarySearchTree.prototype.DFSPreOrder = function () {
	let arr = [];
	if (this.root) traverse(this.root);
	return arr;
	function traverse(rootTreeNode) {
		if (rootTreeNode) arr.push(rootTreeNode.value); // record the value
		if (rootTreeNode.left) traverse(rootTreeNode.left); // traverse the left branch
		if (rootTreeNode.right) traverse(rootTreeNode.right); // traverse the right branch
	}
}

/**
 * search through each TreeNode in the binary search tree using in-order depth first search and 
 * return an array containing each TreeNode's value.
 */
BinarySearchTree.prototype.DFSInOrder = function () {
	let arr = [];
	if (this.root) traverse(this.root);
	return arr;
	function traverse(rootTreeNode) {
		if (rootTreeNode.left) traverse(rootTreeNode.left); // traverse the left branch
		if (rootTreeNode) arr.push(rootTreeNode.value); // record the value
		if (rootTreeNode.right) traverse(rootTreeNode.right); // traverse the right branch
	}
}

/**
 * search through each TreeNode in the binary search tree using post-order depth first search and 
 * return an array containing each TreeNode's value.
 */
BinarySearchTree.prototype.DFSPostOrder = function () {
	let arr = [];
	if (this.root) traverse(this.root);
	return arr;
	function traverse(rootTreeNode) {
		if (rootTreeNode.left) traverse(rootTreeNode.left); // traverse the left branch
		if (rootTreeNode.right) traverse(rootTreeNode.right); // traverse the right branch
		if (rootTreeNode) arr.push(rootTreeNode.value); // record the value
	}
}

/**
 * search through each TreeNode in the binary search tree using breadth first search and 
 * return an array containing each TreeNode's value.
 */
BinarySearchTree.prototype.breadthFirstSearch = function () {
	let arr = [];
	let q = [this.root]; // Queue of TreeNodes
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
 * finds and returns the TreeNode with the minimum value on a branch.
 * (this is similar to finding the left most TreeNode within a branch);
 * this is a helper function for remove() method.
 * @param {TreeNode} root the root of the branch to search
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
 * This function should remove a TreeNode from a binary search tree recursively
 * Your remove function should be able to handle removal of the root TreeNode, removal of a TreeNode with one child and removal of a TreeNode with two children. 
 * The function should return the TreeNode removed.
 * @param {any} val value to remove from the tree
 */
BinarySearchTree.prototype.remove = function (val) {
	// find the TreeNode with the value
	//let TreeNodeToRemove = this.findRecursively(val);
	//if (!TreeNodeToRemove) return null; // TreeNode does not exist in this tree
	// todo: make a recursive remove TreeNode from branch, that also finds the TreeNode to be removed
	this.root = removeTreeNode(val, this.root);

	function removeTreeNode(val, root) {
		if (val < root.value) {
			// left branch search
			if (root.left) {
				root.left = removeTreeNode(val, root.left);
			} // else - val does not exist. should do anything?
		} else if (val > root.value) {
			// right branch search
			if (root.right) {
				root.right = removeTreeNode(val, root.right);
			} // else - val does not exist. should do anything?
		} else {
			// TreeNode to be removed found!
			// deal with 3 cases:
			// 1) no childs - just return null
			if (!root.left && !root.right) return null;
			// 2) 1 child - return this 1 child
			if ((root.left === null) != (root.right === null)) { // XOR look alike
				if (root.left) return root.left;
				if (root.right) return root.right;
			}
			// 3) 2 childs - return the successor - search the right branch for the left most TreeNode (IE: min value) and replace the root note with it
			// find the successor:
			let suc = findMinInBST(root.right);
			root.value = suc.value; // replcace the value of the root 
			// remove suc (which is duplicated now)
			root.right = removeTreeNode(suc.value, root.right);
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
	let q = [{ TreeNode: this.root, spaces: spaces }]; // Queue of TreeNodes
	while (q.length > 0) {
		let obj = q.shift();
		if (obj.TreeNode) {
			// record the value
			if (obj.spaces != spaces) {
				// reached new level
				console.log(line);
				line = ''; // new line
				spaces = obj.spaces;
			}
			const spcacesFill = Array(Math.floor(obj.spaces)).join(' '); // creates spaces 
			line += spcacesFill + obj.TreeNode.value + spcacesFill;
			if (obj.TreeNode.left || obj.TreeNode.right) {
				obj.TreeNode.left ? q.push({ TreeNode: obj.TreeNode.left, spaces: obj.spaces / 2 }) : q.push({ TreeNode: new TreeNode('  '), spaces: obj.spaces / 2 });
				obj.TreeNode.right ? q.push({ TreeNode: obj.TreeNode.right, spaces: obj.spaces / 2 }) : q.push({ TreeNode: new TreeNode('  '), spaces: obj.spaces / 2 });
			}
		}
	}
	if (line.length > 0) console.log(line); // remains
}

/**
 * Create and return a string with numOfSpaces spaces
 * @param {number} numOfSpaces Number of spaces to make
 */
function makeSpaces(numOfSpaces = 1) {
	return Array(numOfSpaces + 1).join(' '); // +1 because of how the join mechanism works
}


/**
 * Recursive function to calculate and fill the TreeNode.spaces as preparation for print
 * function returns the number of spaces this root has
 * @param {TreeNode} root the root TreeNode
 * @param {number} depth depth to give to the root, and yield to it's branch
 */
BinarySearchTree.prototype.calculateSpaces = function (gap = 1, root = this.root, depth = 1) {
	// if root not exist - return 0. (not suppose to happen - just to be robust)
	if (!root) return 0;
	root.depth = depth;
	root.width = 0;
	root.location = 0;

	if (root.left) {
		// there is a left child - recursive call to calculate left spaces:
		root.width += this.calculateSpaces(gap, root.left, root.depth + 1); // recursive call to left branch
		root.location=root.width; // location of the parent link is to the right of the left branch
	}
	if (root.right) {
		// there is a right child. pass the current spaces for it's initialSpaces + 1
		// this.calculateSpaces(gap, root.right, root.depth + 1, root.spaces + 1); // recursive call to right branch
		root.width += this.calculateSpaces(gap, root.right, root.depth + 1); // recursive call to right branch
	}
	if (root.right || root.left) root.width += gap; // add the gap if there is at least one child node
	root.width = Math.max(root.value.length, root.width); // width will be whatever is bigger: the value's length, or both sides
	root.location+=Math.floor(root.value/2); // add half of the value width to the location, so it points in the middle of it
	return root.width;
}

/**
 * Prints the tree to the console
 */
BinarySearchTree.prototype.print = function () {
	if (!this.root) return; // root TreeNode does not exist
	const GAP = 1;
	this.calculateSpaces(GAP);
	// print the tree
	let line = ''; // the tree data line
	let art = ''; // the lines art line
	// will try to use "Breadth First Traverse"
	let q = []; // Queue of TreeNodes
	q.push(this.root);
	let lastDepth = this.root.depth; // keep last depth to know when there is a line break
	while (q.length > 0) {
		let n = q.shift();
		// record the value
		if (n.depth != lastDepth) {
			// reached new level
			console.log(line);
			console.log(art);
			line = ''; // new line
			art = ''; // new art line
			lastDepth = n.depth;
		}
		if (n.left) {
			line += makeSpaces(n.left.spaces); // create spaces of left branch. +1 to create the basic shift
			art += ' '.repeat(Math.floor(n.left.spaces / 2) - 1) + LINE_DOWN_RIGHT + LINE_LEFT_RIGHT.repeat(n.left.spaces / 2);
			q.push(n.left); // push the branch in the queue
		}
		//line += makeSpaces(n.spaces);
		line += n.value; // log the value itself
		line += makeSpaces(GAP);
		if (n.right && n.left) art += LINE_UP_LEFT_RIGHT; // 2 childs
		else if (n.right) art += LINE_UP_RIGHT; // right child
		else if (n.left) art += LINE_UP_LEFT; // left child
		if (n.right) {
			line += makeSpaces(n.right.spaces); // create spaces of right branch
			art += LINE_LEFT_RIGHT.repeat(n.right.spaces - 1) + LINE_DOWN_LEFT;
			q.push(n.right); // push the branch in the que
		}
	}
	if (line.length > 0) console.log(line); // remains
	//if (art.length > 0) console.log(art); // remains
}



// debug
let t = new BinarySearchTree();
// t.insertIteratively(15);
// t.insertIteratively(20);
// t.insertIteratively(10);
// t.insertIteratively(12);
// t.insertIteratively(1);
// t.insertIteratively(5);
// t.insertIteratively(50);
// t.insertIteratively(60);
// t.insertIteratively(30);
// t.insertIteratively(25);
// t.insertIteratively(23);
// t.insertIteratively(24);
// t.insertIteratively(70);
// t.insertIteratively(55);

t.insertIteratively(7);
t.insertIteratively(5);
t.insertIteratively(3);
t.insertIteratively(9);

// t.insertIteratively(10);
// t.insertIteratively(5);
// t.insertIteratively(7);
// t.insertIteratively(6);
// t.insertIteratively(119);
// t.insertIteratively(11111);
// t.insertIteratively(22222);
// t.insertIteratively(1);
// t.insertIteratively(16);
// t.insertIteratively(12);
// t.insertIteratively(19);


//console.log(t.toArray());
//console.log(`min: ${findMinInBST(t.root.left).value}`);
// console.log(`Before remove: ${t.DFSInOrder()}`);
// t.remove(51);
// console.log(`After remove : ${t.DFSInOrder()}`);
t.print();

