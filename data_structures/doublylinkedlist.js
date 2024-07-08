/*
 * Doubly Linked List
 * Class Methods:
 * 1. append
 * 2. prepend
 * 3. insertAfter
 * 4. delete
 * 5. deleteHead
 * 6. deleteTail
 * 7. search
 * 8. print
 * 9. forwardtraverse
 * 10. backwardtraverse
 */

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
    }

    prepend(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
    }

    forwardtraverse() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }

    backwardtraverse() {
        let current = this.tail;
        while (current) {
            console.log(current.value);
            current = current.prev;
        }
    }

    search(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) {
                return current;
            }
            current = current.next;
        }
        return null;
    }

    insertAfter(value, afterValue) {
        const newNode = new Node(value);
        let current = this.head;

        while (current) {
            if (current.value === afterValue) {
                newNode.next = current.next;
                newNode.prev = current;
                current.next = newNode;
                if (newNode.next) {
                    newNode.next.prev = newNode;
                } else {
                    this.tail = newNode; // Update the tail if we're inserting at the end
                }
                return;
            }
            current = current.next;
        }
    }

    delete(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) {
                if (current === this.head) {
                    this.head = current.next;
                    if (this.head) {
                        this.head.prev = null;
                    } else {
                        this.tail = null;
                    }
                    return;
                }
                if (current === this.tail) {
                    this.tail = current.prev;
                    this.tail.next = null;
                    return;
                }
                current.prev.next = current.next;
                current.next.prev = current.prev;
                return;
            }
            current = current.next;
        }
    }

    deleteHead() {
        if (!this.head) return;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }
    }

    deleteTail() {
        if (!this.tail) return;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
    }

    display() {
        let current = this.head;
        let result = '';
        while (current) {
            result += current.value;
            if (current.next) {
                result += ' -> ';
            }
            current = current.next;
        }
        console.log(result);
    }
}

// Usage
const list = new DoublyLinkedList();
list.append(1);
list.append(2);
list.append(3);
list.prepend(0);
list.display(); // Expected output: "0->1->2->3"
list.deleteHead(); // Removes the head node (0), resulting in "1->2->3"
list.display(); // Expected output: "1->2->3"
list.deleteTail(); // Removes the tail node (3), resulting in "1->2"
list.display(); // Expected output: "1->2"
list.insertAfter(4, 2); // Inserts 4 after 2, resulting in "1->2->4"
list.display(); // Expected output: "1->2->4"
