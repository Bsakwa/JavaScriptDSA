import { expect } from 'chai';
import  LinkedList from '../data_structures/linkedlist.js';

describe('LinkedList', () => {
    let list;

    beforeEach(() => {
        list = new LinkedList(1);
    });

    it('should initialize correctly', () => {
        expect(list.head.value).to.equal(1);
        expect(list.tail.value).to.equal(1);
        expect(list.size).to.equal(1);
    });

    it('should append nodes correctly', () => {
        list.append(2);
        list.append(3);
        expect(list.display()).to.equal('1 -> 2 -> 3');
        expect(list.size).to.equal(3);
    });

    it('should prepend nodes correctly', () => {
        list.prepend(0);
        list.prepend(-1);
        expect(list.display()).to.equal('-1 -> 0 -> 1');
        expect(list.size).to.equal(3);
    });

    it('should forward traverse correctly', () => {
        list.append(2);
        list.append(3);
        expect(list.forwardTraverse()).to.deep.equal([1, 2, 3]);
    });

    // Add more tests as needed
});
