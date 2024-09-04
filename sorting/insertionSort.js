/**
 * InsertionSort Class
 * 
 * This class implements the Insertion Sort algorithm, a simple and efficient sorting technique.
 * 
 * The Insertion Sort algorithm works by building a sorted portion of the array one element at a time.
 * It iterates through the array, and for each element, it finds the appropriate position within the sorted portion
 * and inserts it there, shifting the larger elements to the right.
 * 
 * Big O Notation:
 * - Time Complexity:
 *   - Worst Case: O(n^2) – occurs when the array is sorted in reverse order.
 *   - Average Case: O(n^2) – this is the most common scenario.
 *   - Best Case: O(n) – occurs when the array is already sorted.
 * - Space Complexity: O(1) – Insertion Sort is an in-place sorting algorithm, meaning it does not require additional space.
 * - Stability: Insertion Sort is stable, meaning that two equal elements retain their relative order in the sorted array.
 */

class InsertionSort {
    /**
     * Constructor for the InsertionSort class.
     * 
     * @param {number[]} arr - The array of numbers to be sorted.
     */
    constructor(arr) {
        this.arr = arr; // Store the input array in the class instance.
    }

    /**
     * sort Method
     * 
     * This method implements the Insertion Sort algorithm. It iterates through the array,
     * taking each element and inserting it into its correct position in the sorted portion of the array.
     * 
     * This process is repeated until the entire array is sorted.
     * 
     * @returns {number[]} The sorted array.
     */
    sort() {
        let n = this.arr.length; // Get the length of the array.

        // Start with the second element, as the first element is trivially sorted.
        for (let i = 1; i < n; i++) {
            let key = this.arr[i]; // The element to be inserted into the sorted portion.
            let j = i - 1;

            // Shift elements of the sorted portion that are greater than the key to the right.
            while (j >= 0 && this.arr[j] > key) {
                this.arr[j + 1] = this.arr[j];
                j = j - 1;
            }

            // Insert the key into its correct position.
            this.arr[j + 1] = key;
        }

        return this.arr; // Return the sorted array.
    }
}

// Export the InsertionSort class for use in other files (e.g., in a test suite).
export default InsertionSort;
