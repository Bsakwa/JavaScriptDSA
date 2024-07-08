/*
 * LinkedList is a data structure that consists of a sequence of elements, each element points to the next element in the sequence.
 * The elements are connected using pointers.
 * The first element is called the head and the last element is called the tail.
 * The tail points to null.
 * The size of the linked list is the number of elements in the list.
 * The linked list can be traversed in two ways: forward and backward.
 */

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(headValue = null) {
        this.head = new Node(headValue);
        this.tail = this.head;
        this.size = 1;
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.size++;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    forwardTraverse() {
        let currentNode = this.head;
        while (currentNode !== null) {
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
    }

    display() {
        let currentNode = this.head;
        let result = '';
        while (currentNode) {
            result += currentNode.value;
            if (currentNode.next) {
                result += ' -> ';
            }
            currentNode = currentNode.next;
        }
        console.log(result);
    }
}

// Example usage
const myList = new LinkedList(1);
myList.append(2);
myList.prepend(0);
myList.forwardTraverse(); // 0 1 2
myList.display(); // 0 -> 1 -> 2
