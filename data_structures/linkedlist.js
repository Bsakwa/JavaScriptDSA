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

    display() {
        let currentNode = this.head;
        let result = '';
        while (currentNode !== null) {
            result += currentNode.value + ' ';
            currentNode = currentNode.next;
        }
        console.log(result.trim());
    }
}

// Example usage
const myList = new LinkedList(1);
myList.append(2);
myList.prepend(0);
myList.display(); // Output: 0 1 2                   
