import { expect } from 'chai';
import Queue from '../data_structures/queue.js';

describe('Queue', () => {
    let queue;

    beforeEach(() => {
        queue = new Queue();
    });

    it('should start empty', () => {
        expect(queue.isEmpty()).to.be.true;
        expect(queue.size()).to.equal(0);
    });

    it('should enqueue elements', () => {
        queue.enqueue(1);
        expect(queue.isEmpty()).to.be.false;
        expect(queue.size()).to.equal(1);
        expect(queue.front()).to.equal(1);

        queue.enqueue(2);
        expect(queue.size()).to.equal(2);
        expect(queue.front()).to.equal(1);
    });

    it('should dequeue elements', () => {
        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.dequeue()).to.equal(1);
        expect(queue.size()).to.equal(1);
        expect(queue.front()).to.equal(2);
        expect(queue.dequeue()).to.equal(2);
        expect(queue.isEmpty()).to.be.true;
    });

    it('should return "Queue is empty" when dequeuing from an empty queue', () => {
        expect(queue.dequeue()).to.equal('Queue is empty');
    });

    it('should return "Queue is empty" when checking the front of an empty queue', () => {
        expect(queue.front()).to.equal('Queue is empty');
    });

    it('should clear the queue', () => {
        queue.enqueue(1);
        queue.enqueue(2);
        queue.clear();
        expect(queue.isEmpty()).to.be.true;
        expect(queue.size()).to.equal(0);
        expect(queue.front()).to.equal('Queue is empty');
    });

    it('should print the queue', () => {
        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.print()).to.deep.equal([1, 2]);
    });
});
