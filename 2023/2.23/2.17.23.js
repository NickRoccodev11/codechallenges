//BINARY SEARCH TREE

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
