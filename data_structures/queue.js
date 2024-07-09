/*
 * Queues are a type of list where data is inserted at the end and removed from the front.
 * This is known as First-In-First-Out (FIFO) data structure.
 */


class Queue {
    constructor() {
        this.data = [];
    }

    // Add an element to the end of the queue
    enqueue(element) {
        this.data.push(element);
    }

    // Remove an element from the front of the queue
    dequeue() {
        if (this.isEmpty()) {
            return 'Queue is empty';
        }
        return this.data.shift();
    }

    // Check if the queue is empty
    isEmpty() {
        return this.data.length === 0;
    }

    // Get the front element of the queue
    front() {
        if (this.isEmpty()) {
            return 'Queue is empty';
        }
        return this.data[0];
    }
    
    // Get the size of the queue
    size() {
        return this.data.length;
    }

    // clear the queue
    clear() {
        this.data = [];
    }

    // Print the queue
    print() {
        return this.data;
    }
}

export default Queue;
