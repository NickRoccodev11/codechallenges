const log = console.log;
// ALWAYS DO PREP!!!   Parameters - Returns - Examples - Pseudocode

// Parameters - clarify all possibilities for params. think of edge cases. 

//Return - what is it exactly that you are returning? boolean? array? obj? string? mutated original / copy? 

//Examples - talk through test cases, cosider every outcome and log them with along with the answer 
//  console.log(function(exampleA), 'true' ) //  console.log(function(exampleB), 'false' )

// Pseudocode - talk about what you want to do HIGH LEVEL. then write out each step and look for possible snafus
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}


class LinkedListSingle {
    constructor() {
        this.head = null
        this.size = 0
    }

    //insert first node
    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++
    }

    //insert last node
    insertLast(data) {
        let node = new Node(data)
        let current

        //if empty, make head
        if (!this.head) {
            this.head = node
        } else {
            current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = node
        }
        this.size++
    }

    //insert at specific index
    insertAt(data, index) {
        //if idx is out of range
        if (index > 0 && index > this.size) {
            return
        }

        //if inserting at first idx
        if (index === 0) {
            this.insertFirst(data);
            return;
        }

        const node = new Node(data)
        let current, previous;

        //set current to first
        current = this.head;
        let count = 0

        while (count < index) {
            previous = current; //node b4 idx
            count++
            current = current.next //node after idx
        }
        node.next = current
        previous.next = node
        this.size++
    }
    //log data from a requested idx
    getAtIndex(index) {
        let current = this.head;
        let count = 0;
        while (current) {
            if (count === index) {
                console.log(current.data)
            }
            count++
            current = current.next
        }
        return null
    }

    removeAtIndex(index) {
        if (index > 0 && index > this.size) {
            return
        }

        let current = this.head
        let previous;
        let count = 0

        //Remove first 
        if (index == 0) {
            this.head = current.next
        } else {
            while (count < index) {
                count++
                previous = current
                current = current.next
            }
            previous.next = current.next
        }
        this.size--
    }


    // Clear list
    clearList() {
        this.head = null;
        this.size = 0;
    }

    printListData() {
        let current = this.head
        while (current) {
            console.log(current.data)
            current = current.next
        }
    }

}
const ll = new LinkedListSingle
ll.insertLast(2)
ll.insertLast(3)
ll.insertLast(4)
ll.insertFirst(1)

ll.printListData()

ll.getAtIndex(2)
ll.removeAtIndex(2)
ll.printListData()
ll.insertAt(3,2)
ll.printListData()
ll.insertFirst(0)
ll.printListData()

//////////////////////////////////////////////////////////////////////////////////////////////////
// To calculate Big O, there are five steps you should follow:

// Break your algorithm/function into individual operations

// Calculate the Big O of each operation

// Add up the Big O of each operation together

// Remove the constants

// Find the highest order term — this will be what we consider the Big O 
// of our algorithm/function
