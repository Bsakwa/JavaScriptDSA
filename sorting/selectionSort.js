/**
 * SelectionSort Class
 * 
 * This class implements the Selection Sort algorithm, a simple and intuitive sorting technique.
 * 
 * The Selection Sort algorithm works by dividing the list into a sorted and an unsorted region.
 * It repeatedly selects the smallest (or largest, depending on sorting order) element from the unsorted region
 * and moves it to the end of the sorted region.
 * 
 * Big O Notation:
 * - Time Complexity:
 *   - Worst Case: O(n^2) – occurs when the array is sorted in reverse order.
 *   - Average Case: O(n^2) – this is the most common scenario.
 *   - Best Case: O(n^2) – even if the array is already sorted, Selection Sort still scans all elements.
 * - Space Complexity: O(1) – Selection Sort is an in-place sorting algorithm, meaning it does not require additional space.
 * - Stability: Selection Sort is not stable, meaning that two equal elements may not retain their relative order in the sorted array.
 */

class SelectionSort {
    /**
     * Constructor for the SelectionSort class.
     * 
     * @param {number[]} arr - The array of numbers to be sorted.
     */
    constructor(arr) {
        this.arr = arr; // Store the input array in the class instance.
    }

    /**
     * sort Method
     * 
     * This method implements the Selection Sort algorithm. It iterates through the array,
     * selects the smallest element from the unsorted part, and swaps it with the first unsorted element.
     * 
     * This process is repeated until the entire array is sorted.
     * 
     * @returns {number[]} The sorted array.
     */
    sort() {
        let n = this.arr.length; // Get the length of the array.

        // Outer loop: Moves the boundary of the unsorted part of the array.
        for (let i = 0; i < n - 1; i++) {
            let minIndex = i; // Assume the current element is the smallest.

            // Inner loop: Finds the smallest element in the unsorted part of the array.
            for (let j = i + 1; j < n; j++) {
                if (this.arr[j] < this.arr[minIndex]) {
                    minIndex = j; // Update minIndex if a smaller element is found.
                }
            }

            // Swap the found smallest element with the first unsorted element.
            if (minIndex !== i) {
                let temp = this.arr[i];           // Store the current element in a temporary variable.
                this.arr[i] = this.arr[minIndex]; // Move the smallest element to the current position.
                this.arr[minIndex] = temp;        // Move the stored element to the minIndex position.
            }
        }

        return this.arr; // Return the sorted array.
    }
}

// Export the SelectionSort class for use in other files (e.g., in a test suite).
export default SelectionSort;
