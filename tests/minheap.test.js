import { expect } from 'chai';
import MinHeap from '../data_structures/minHeap.js';

describe('MinHeap', () => {
  let minHeap;

  beforeEach(() => {
    minHeap = new MinHeap();
  });

  describe('insert', () => {
    it('should insert elements into the heap', () => {
      minHeap.insert(3);
      minHeap.insert(1);
      minHeap.insert(6);
      minHeap.insert(5);
      minHeap.insert(2);
      minHeap.insert(4);
      expect(minHeap.heap).to.deep.equal([1, 2, 4, 5, 3, 6]);
    });
  });

  describe('peek', () => {
    it('should return the smallest element without removing it', () => {
      minHeap.insert(3);
      minHeap.insert(1);
      minHeap.insert(6);
      expect(minHeap.peek()).to.equal(1);
    });

    it('should throw an error if the heap is empty', () => {
      expect(() => minHeap.peek()).to.throw('Heap is empty');
    });
  });

  describe('remove', () => {
    it('should remove and return the smallest element', () => {
      minHeap.insert(3);
      minHeap.insert(1);
      minHeap.insert(6);
      expect(minHeap.remove()).to.equal(1);
      expect(minHeap.heap).to.deep.equal([3, 6]);
    });

    it('should throw an error if the heap is empty', () => {
      expect(() => minHeap.remove()).to.throw('Heap is empty');
    });
  });

  describe('heapifyUp', () => {
    it('should maintain the min-heap property after insertion', () => {
      minHeap.insert(3);
      minHeap.insert(1);
      minHeap.insert(6);
      minHeap.insert(5);
      minHeap.insert(2);
      minHeap.insert(4);
      expect(minHeap.heap).to.deep.equal([1, 2, 4, 5, 3, 6]);
    });
  });

  describe('heapifyDown', () => {
    it('should maintain the min-heap property after removal', () => {
      minHeap.insert(3);
      minHeap.insert(1);
      minHeap.insert(6);
      minHeap.insert(5);
      minHeap.insert(2);
      minHeap.insert(4);
      minHeap.remove();
      expect(minHeap.heap).to.deep.equal([2, 3, 4, 5, 6]);
    });
  });
});
