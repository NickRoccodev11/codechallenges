// DATA STRUCTURES

//QUEUE (FIFO)

class Queue {
    constructor() {
        this.storage = {},
            this.head = 0,
            this.tail = 0;
    }
    enqueue(element) {
        this.storage[this.tail] = element;
        this.tail++
    }
    dequeue() {
        let removed = this.storage[this.head];
        delete this.storage[this.head];
        this.head++;
        return removed
    }
}
//create a new queue
const birds = new Queue;
//add three elements
birds.enqueue("parrot")
birds.enqueue("pigeon")
birds.enqueue("lark")
// remove the first element
birds.dequeue()

//STACK

