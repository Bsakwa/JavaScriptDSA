import Stack from '../data_structures/stack.js';
import { expect } from 'chai';

describe('Stack', () => {
    let stack;

    beforeEach(() => {
        stack = new Stack();
    });

    it('should add elements to the stack', () => {
        stack.push(1);
        stack.push(2);
        expect(stack.print()).to.deep.equal([1, 2]);
    });

    it('should remove elements from the stack', () => {
        stack.push(1);
        stack.push(2);
        const removedElement = stack.pop();
        expect(removedElement).to.equal(2);
        expect(stack.print()).to.deep.equal([1]);
    });

    it('should return "Underflow" when trying to pop from an empty stack', () => {
        const removedElement = stack.pop();
        expect(removedElement).to.equal('Underflow');
    });

    it('should get the top element of the stack', () => {
        stack.push(1);
        stack.push(2);
        const topElement = stack.getTop();
        expect(topElement).to.equal(2);
    });

    it('should return true if the stack is empty', () => {
        expect(stack.isEmpty()).to.be.true;
        stack.push(1);
        expect(stack.isEmpty()).to.be.false;
    });

    it('should return the size of the stack', () => {
        expect(stack.size()).to.equal(0);
        stack.push(1);
        stack.push(2);
        expect(stack.size()).to.equal(2);
    });

    it('should clear the stack', () => {
        stack.push(1);
        stack.push(2);
        stack.clear();
        expect(stack.print()).to.deep.equal([]);
    });
});
