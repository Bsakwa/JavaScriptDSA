/**
 * BucketSort Class
 * 
 * This class implements the Bucket Sort algorithm, a distribution sorting algorithm.
 * 
 * Bucket Sort works by distributing the elements of an array into a number of buckets.
 * Each bucket is then sorted individually, either using a different sorting algorithm,
 * or by recursively applying the bucket sorting algorithm.
 * 
 * Big O Notation:
 * - Time Complexity:
 *   - Worst Case: O(n^2) – occurs when all elements are placed into a single bucket.
 *   - Average Case: O(n + k) – where k is the number of buckets.
 *   - Best Case: O(n + k) – when the elements are uniformly distributed across the buckets.
 * - Space Complexity: O(n + k) – additional space is needed for the buckets.
 * - Stability: Bucket Sort can be stable if the underlying sorting algorithm for each bucket is stable.
 */
class BucketSort {
    /**
     * Constructor for the BucketSort class.
     * 
     * @param {number[]} arr - The array of numbers to be sorted.
     * @param {number} bucketSize - The size of each bucket (default is 5).
     */
    constructor(arr, bucketSize = 5) {
        this.arr = arr;
        this.bucketSize = bucketSize;
    }

    /**
     * sort Method
     * 
     * This method implements the Bucket Sort algorithm. It distributes elements into buckets,
     * sorts each bucket, and then concatenates the buckets to produce the final sorted array.
     * 
     * @returns {number[]} The sorted array.
     */
    sort() {
        if (this.arr.length === 0) {
            return this.arr;
        }

        // Determine minimum and maximum values
        let minValue = this.arr[0];
        let maxValue = this.arr[0];
        for (let i = 1; i < this.arr.length; i++) {
            if (this.arr[i] < minValue) {
                minValue = this.arr[i];
            } else if (this.arr[i] > maxValue) {
                maxValue = this.arr[i];
            }
        }

        // Initialize buckets
        let bucketCount = Math.floor((maxValue - minValue) / this.bucketSize) + 1;
        let buckets = new Array(bucketCount);
        for (let i = 0; i < buckets.length; i++) {
            buckets[i] = [];
        }

        // Distribute input array values into buckets
        for (let i = 0; i < this.arr.length; i++) {
            let bucketIndex = Math.floor((this.arr[i] - minValue) / this.bucketSize);
            buckets[bucketIndex].push(this.arr[i]);
        }

        // Sort buckets and create output array
        let sortedArray = [];
        for (let i = 0; i < buckets.length; i++) {
            this.insertionSort(buckets[i]);
            sortedArray = sortedArray.concat(buckets[i]);
        }

        return sortedArray;
    }

    /**
     * insertionSort Method
     * 
     * This method implements the Insertion Sort algorithm, used to sort individual buckets.
     * 
     * @param {number[]} arr - The array to be sorted.
     * @returns {number[]} The sorted array.
     */
    insertionSort(arr) {
        for (let i = 1; i < arr.length; i++) {
            let current = arr[i];
            let j = i - 1;
            while (j >= 0 && arr[j] > current) {
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = current;
        }
        return arr;
    }
}

export default BucketSort;
