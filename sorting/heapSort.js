/**
 * HeapSort Class
 * 
 * This class implements the Heap Sort algorithm, an efficient comparison-based sorting technique.
 * 
 * The Heap Sort algorithm works by building a max heap from the input data, and then repeatedly extracting 
 * the maximum element from the heap and placing it at the end of the array. The heap is then adjusted 
 * to maintain the heap property.
 * 
 * Big O Notation:
 * - Time Complexity:
 *   - Worst Case: O(n log n) – occurs for all cases.
 *   - Average Case: O(n log n) – this is the most common scenario.
 *   - Best Case: O(n log n) – even if the array is already sorted.
 * - Space Complexity: O(1) – Heap Sort is an in-place sorting algorithm.
 * - Stability: Heap Sort is not stable.
 */

class HeapSort {
    /**
     * Constructor for the HeapSort class.
     * 
     * @param {number[]} arr - The array of numbers to be sorted.
     */
    constructor(arr) {
        this.arr = arr; // Store the input array in the class instance.
    }

    /**
     * sort Method
     * 
     * This method implements the Heap Sort algorithm. It builds a max heap and sorts the array in-place.
     * 
     * @returns {number[]} The sorted array.
     */
    sort() {
        let n = this.arr.length;

        // Build max heap
        for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
            this.heapify(n, i);
        }

        // Extract elements from heap one by one
        for (let i = n - 1; i > 0; i--) {
            // Move the current root (max element) to the end
            [this.arr[0], this.arr[i]] = [this.arr[i], this.arr[0]];

            // Call heapify on the reduced heap
            this.heapify(i, 0);
        }

        return this.arr; // Return the sorted array.
    }

    /**
     * heapify Method
     * 
     * This method ensures the heap property is maintained. If the root node is not the largest, it swaps
     * it with the largest child and continues heapifying recursively.
     * 
     * @param {number} n - The size of the heap.
     * @param {number} i - The index of the current root node.
     */
    heapify(n, i) {
        let largest = i;   // Initialize largest as root
        let left = 2 * i + 1;  // Left child
        let right = 2 * i + 2; // Right child

        // If left child is larger than root
        if (left < n && this.arr[left] > this.arr[largest]) {
            largest = left;
        }

        // If right child is larger than largest so far
        if (right < n && this.arr[right] > this.arr[largest]) {
            largest = right;
        }

        // If largest is not root, swap and continue heapifying
        if (largest !== i) {
            [this.arr[i], this.arr[largest]] = [this.arr[largest], this.arr[i]];

            // Recursively heapify the affected subtree
            this.heapify(n, largest);
        }
    }
}

// Export the HeapSort class for use in other files (e.g., in a test suite).
export default HeapSort;
