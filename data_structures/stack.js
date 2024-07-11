/*
 * A stack is a data structure that allows you to add and remove elements in a particular order.
 * It follows the LIFO (Last In First Out) principle.
 * The last element added to the stack will be the first one to be removed.
 */

class Stack {
    constructor() {
        this.items = [];
    }

    // Add element to the stack
    push(element) {
        this.items.push(element);
    }

    // Remove element from the stack
    pop() {
        if (this.items.length === 0) {
            return "Underflow";
        }
        return this.items.pop();
    }

    // Get the top element of the stack
    getTop() {
        return this.items[this.items.length - 1];
    }

    // Check if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Get the size of the stack
    size() {
        return this.items.length;
    }

    // Clear the stack
    clear() {
        this.items = [];
    }

    // Print the stack
    print() {
        return this.items;
    }

}

export default Stack;
