import { expect } from 'chai';
import HeapSort from '../sorting/heapSort.js';

describe('HeapSort', function() {
    it('should sort an array of numbers in ascending order', function() {
        const array = [64, 25, 12, 22, 11];
        const sorter = new HeapSort(array);
        const sortedArray = sorter.sort();
        expect(sortedArray).to.deep.equal([11, 12, 22, 25, 64]);
    });

    it('should handle an already sorted array', function() {
        const array = [1, 2, 3, 4, 5];
        const sorter = new HeapSort(array);
        const sortedArray = sorter.sort();
        expect(sortedArray).to.deep.equal([1, 2, 3, 4, 5]);
    });

    it('should handle an array with duplicate elements', function() {
        const array = [4, 2, 3, 2, 1, 4];
        const sorter = new HeapSort(array);
        const sortedArray = sorter.sort();
        expect(sortedArray).to.deep.equal([1, 2, 2, 3, 4, 4]);
    });

    it('should handle an array with a single element', function() {
        const array = [1];
        const sorter = new HeapSort(array);
        const sortedArray = sorter.sort();
        expect(sortedArray).to.deep.equal([1]);
    });

    it('should handle an empty array', function() {
        const array = [];
        const sorter = new HeapSort(array);
        const sortedArray = sorter.sort();
        expect(sortedArray).to.deep.equal([]);
    });
});
