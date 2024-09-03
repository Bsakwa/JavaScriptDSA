import { expect } from 'chai';
import BubbleSort from '../sorting/bubblesort.js';

describe('BubbleSort Class', () => {
    it('should sort an array of numbers in ascending order', () => {
        const sorter = new BubbleSort([5, 3, 8, 4, 2]);
        const sortedArray = sorter.sort();
        expect(sortedArray).to.deep.equal([2, 3, 4, 5, 8]);
    });

    it('should handle an empty array', () => {
        const sorter = new BubbleSort([]);
        const sortedArray = sorter.sort();
        expect(sortedArray).to.deep.equal([]);
    });

    it('should handle an array with one element', () => {
        const sorter = new BubbleSort([1]);
        const sortedArray = sorter.sort();
        expect(sortedArray).to.deep.equal([1]);
    });

    it('should handle an array that is already sorted', () => {
        const sorter = new BubbleSort([1, 2, 3, 4, 5]);
        const sortedArray = sorter.sort();
        expect(sortedArray).to.deep.equal([1, 2, 3, 4, 5]);
    });

    it('should handle an array with duplicate elements', () => {
        const sorter = new BubbleSort([3, 3, 2, 1, 3]);
        const sortedArray = sorter.sort();
        expect(sortedArray).to.deep.equal([1, 2, 3, 3, 3]);
    });
});
