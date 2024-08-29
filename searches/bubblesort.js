/**
 * BubbleSort Class
 * 
 * This class implements the Bubble Sort algorithm, a simple sorting technique.
 * 
 * The Bubble Sort algorithm works by repeatedly stepping through the list to be sorted,
 * comparing each pair of adjacent items and swapping them if they are in the wrong order.
 * This process is repeated until the list is sorted.
 * 
 * Big O Notation:
 * - Time Complexity:
 *   - Worst Case: O(n^2) – occurs when the array is sorted in reverse order.
 *   - Average Case: O(n^2) – this is the most common scenario.
 *   - Best Case: O(n) – occurs when the array is already sorted, requiring only a single pass.
 * - Space Complexity: O(1) – Bubble Sort is an in-place sorting algorithm, meaning it does not require additional space.
 * - Stability: Bubble Sort is stable, meaning that two equal elements retain their relative order in the sorted array.
 */

class BubbleSort {
    /**
     * Constructor for the BubbleSort class.
     * 
     * @param {number[]} arr - The array of numbers to be sorted.
     */
    constructor(arr) {
        this.arr = arr; // Store the input array in the class instance.
    }

    /**
     * sort Method
     * 
     * This method implements the Bubble Sort algorithm. It iterates through the array multiple times,
     * comparing each pair of adjacent elements and swapping them if they are in the wrong order.
     * 
     * The largest unsorted element "bubbles up" to its correct position at the end of the array after each pass.
     * This process is repeated until no swaps are needed, indicating that the array is sorted.
     * 
     * @returns {number[]} The sorted array.
     */
    sort() {
        let n = this.arr.length; // Get the length of the array.

        // Outer loop: Controls the number of passes through the array.
        // After each pass, the largest unsorted element is moved to its correct position.
        for (let i = 0; i < n - 1; i++) {
            // Inner loop: Compares each pair of adjacent elements in the array.
            for (let j = 0; j < n - 1 - i; j++) {
                // If the current element is greater than the next element, swap them.
                if (this.arr[j] > this.arr[j + 1]) {
                    let temp = this.arr[j];           // Store the current element in a temporary variable.
                    this.arr[j] = this.arr[j + 1];   // Move the next element to the current position.
                    this.arr[j + 1] = temp;          // Move the stored element to the next position.
                }
            }
        }

        return this.arr; // Return the sorted array.
    }
}

// Export the BubbleSort class for use in other files (e.g., in a test suite).
export default BubbleSort;
