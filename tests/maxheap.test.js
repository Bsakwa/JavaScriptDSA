import { expect } from 'chai';
import MaxHeap from '../data_structures/maxHeap.js';

describe('MaxHeap', () => {
  let maxHeap;

  beforeEach(() => {
    maxHeap = new MaxHeap();
  });

  describe('insert', () => {
    it('should insert elements into the heap', () => {
      maxHeap.insert(3);
      maxHeap.insert(1);
      maxHeap.insert(6);
      maxHeap.insert(5);
      maxHeap.insert(2);
      maxHeap.insert(4);
      expect(maxHeap.heap).to.deep.equal([6, 5, 4, 1, 2, 3]);
    });
  });

  describe('peek', () => {
    it('should return the largest element without removing it', () => {
      maxHeap.insert(3);
      maxHeap.insert(1);
      maxHeap.insert(6);
      expect(maxHeap.peek()).to.equal(6);
    });

    it('should return null if the heap is empty', () => {
      expect(maxHeap.peek()).to.be.null;
    });
  });

  describe('extractMax', () => {
    it('should remove and return the largest element', () => {
      maxHeap.insert(3);
      maxHeap.insert(1);
      maxHeap.insert(6);
      expect(maxHeap.extractMax()).to.equal(6);
      expect(maxHeap.heap).to.deep.equal([3, 1]);
    });

    it('should return null if the heap is empty', () => {
      expect(maxHeap.extractMax()).to.be.null;
    });
  });

  describe('heapifyUp', () => {
    it('should maintain the max-heap property after insertion', () => {
      maxHeap.insert(3);
      maxHeap.insert(1);
      maxHeap.insert(6);
      maxHeap.insert(5);
      maxHeap.insert(2);
      maxHeap.insert(4);
      expect(maxHeap.heap).to.deep.equal([6, 5, 4, 1, 2, 3]);
    });
  });

  describe('heapifyDown', () => {
    it('should maintain the max-heap property after extraction', () => {
      maxHeap.insert(3);
      maxHeap.insert(1);
      maxHeap.insert(6);
      maxHeap.insert(5);
      maxHeap.insert(2);
      maxHeap.insert(4);
      maxHeap.extractMax();
      expect(maxHeap.heap).to.deep.equal([5, 3, 4, 1, 2]);
    });
  });

  describe('size', () => {
    it('should return the correct size of the heap', () => {
      expect(maxHeap.size()).to.equal(0);
      maxHeap.insert(3);
      maxHeap.insert(1);
      maxHeap.insert(6);
      expect(maxHeap.size()).to.equal(3);
      maxHeap.extractMax();
      expect(maxHeap.size()).to.equal(2);
    });
  });

  describe('fromArray', () => {
    it('should create a valid max heap from an array', () => {
      const array = [3, 7, 2, 1, 9, 8, 4];
      const maxHeap = MaxHeap.fromArray(array);

      // Check if the resulting heap is valid
      expect(maxHeap.heap[0]).to.equal(9);
      expect(maxHeap.size()).to.equal(array.length);

      // Extract all elements and verify they come out in descending order
      const sortedArray = [];
      while (maxHeap.size() > 0) {
        sortedArray.push(maxHeap.extractMax());
      }
      expect(sortedArray).to.deep.equal([9, 8, 7, 4, 3, 2, 1]);
    });

    it('should handle an empty array', () => {
      const maxHeap = MaxHeap.fromArray([]);
      expect(maxHeap.size()).to.equal(0);
      expect(maxHeap.peek()).to.be.null;
    });

    it('should handle an array with one element', () => {
      const maxHeap = MaxHeap.fromArray([5]);
      expect(maxHeap.size()).to.equal(1);
      expect(maxHeap.peek()).to.equal(5);
    });
  });
});
