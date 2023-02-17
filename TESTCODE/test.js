const log = console.log;
// ALWAYS DO PREP!!!   Parameters - Returns - Examples - Pseudocode

// Parameters - clarify all possibilities for params. think of edge cases. 

//Return - what is it exactly that you are returning? boolean? array? obj? string? mutated original / copy? 

//Examples - talk through test cases, cosider every outcome and log them with along with the answer 
//  console.log(function(exampleA), 'true' ) //  console.log(function(exampleB), 'false' )

// Pseudocode - talk about what you want to do HIGH LEVEL. then write out each step and look for possible snafus
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////


class Node {
    constructor(value) {
        this.value = value;
        this.left = null
        this.right = null
    }
}

class BST {
    constructor(value) {
        this.root = new Node(value)
        this.count = 1;
    }
    size() {
        return this.count
    }

    insert(value) {
        this.count++
        let newNode = new Node(value)

        const searchTree = node => {
            if (value < node.value) {
                if (!node.left) {
                    node.left = newNode
                } else {
                    searchTree(node.left)
                }
            } else if (value > node.value) {
                if (!node.right) {
                    node.right = newNode
                } else {
                    searchTree(node.right)
                }
            }
        }
        searchTree(this.root)
    }
    min() {
        let currentNode = this.root
        while (currentNode.left) {
            currentNode = currentNode.left
        }
        return currentNode.value
    }

    max() {
        let currentNode = this.root
        while (currentNode.right) {
            currentNode = currentNode.right
        }
        return currentNode.value
    }
    contains(value) {
        let currentNode = this.root

        while (currentNode) {
            if (value === currentNode.value) {
                return true
            }
            if (value < currentNode.value) {
                currentNode = currentNode.left
            } else if (value > currentNode.value) {
                currentNode = currentNode.right
            }
        }
        return false
    }
    //depth first search = branch by branch

    //left, root, right
    dfsInOrder() {
        let result = [];

        const traverse = node => {
            if (node.left) traverse(node.left)
            result.push(node.value)
            if (node.right) traverse(node.right)
        }
        traverse(this.root)
        return result
    }

    // root, left, right
    dfsPreOrder() {
        let result = [];
        const traverse = node => {
            result.push(node.value)
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
        }
        traverse(this.root)
        return result
    }

    //left, right, root
    dfsPostOrder() {
        let result = [];
        const traverse = node => {
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
            result.push(node.value)
        }
        traverse(this.root)
        return result
    }
    // breadth first search = level by level 
    bfs() {
        let result = [];
        let queue = [];

        queue.push(this.root);

        while (queue.length) {
            let currentNode = queue.shift()
            result.push(currentNode.value)
            if (currentNode.left) {
                queue.push(currentNode.left)
            }
            if (currentNode.right) {
                queue.push(currentNode.right)
            }
        }
        return result
    }

}

let myBST = new BST(15)
myBST.insert(3)
myBST.insert(36)
myBST.insert(2)
myBST.insert(12)
myBST.insert(28)
myBST.insert(39)
log(myBST.dfsInOrder())
log(myBST.dfsPreOrder())
log(myBST.dfsPostOrder())
log(myBST.bfs())

//////////////////////////////////////////////////////////////////////////////////////////////////
// To calculate Big O, there are five steps you should follow:

// Break your algorithm/function into individual operations

// Calculate the Big O of each operation

// Add up the Big O of each operation together

// Remove the constants

// Find the highest order term — this will be what we consider the Big O 
// of our algorithm/function
