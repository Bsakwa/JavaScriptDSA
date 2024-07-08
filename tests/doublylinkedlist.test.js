import { expect } from 'chai';
import  DoublyLinkedList  from '../data_structures/doublylinkedlist.js';

describe('DoublyLinkedList', () => {
    let list;

    beforeEach(() => {
        list = new DoublyLinkedList();
    });

    it('should append nodes correctly', () => {
        list.append(1);
        list.append(2);
        list.append(3);
        expect(list.display()).to.equal('1 -> 2 -> 3');
    });

    it('should prepend nodes correctly', () => {
        list.prepend(3);
        list.prepend(2);
        list.prepend(1);
        expect(list.display()).to.equal('1 -> 2 -> 3');
    });

    it('should delete the head node correctly', () => {
        list.append(1);
        list.append(2);
        list.append(3);
        list.deleteHead();
        expect(list.display()).to.equal('2 -> 3');
    });

    it('should delete the tail node correctly', () => {
        list.append(1);
        list.append(2);
        list.append(3);
        list.deleteTail();
        expect(list.display()).to.equal('1 -> 2');
    });

    it('should insert after a node correctly', () => {
        list.append(1);
        list.append(2);
        list.append(3);
        list.insertAfter(4, 2);
        expect(list.display()).to.equal('1 -> 2 -> 4 -> 3');
    });

    it('should search the node correctly', () => {
        list.append(1);
        list.append(2);
        list.append(3);
        const node = list.search(2);
        expect(node).to.not.be.null;
        expect(node.value).to.equal(2);
        expect(node.next.value).to.equal(3);
        expect(node.prev.value).to.equal(1);
    });

    // Additional tests can be added here
});
