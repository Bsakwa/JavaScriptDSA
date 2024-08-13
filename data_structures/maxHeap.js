/**
 * A MaxHeap is a binary tree where the value of each node is greater than or equal to the values of its children.
 * The largest value is always at the root. This is how a MaxHeap is structured:
 *
 *         17
 *        /   \
 *      15     10
 *     / \    /  \
 *    9   6  5    8
 *   / \
 *  3   1
 *
 * In an array representation, it looks like this:
 * [17, 15, 10, 9, 6, 5, 8, 3, 1]
 */

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftChildIndex(index) {
    return 2 * index + 1;
  }

  getRightChildIndex(index) {
    return 2 * index + 2;
  }

  swap(index1, index2) {
    const temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  heapifyUp() {
    let currentIndex = this.heap.length - 1;
    while (currentIndex > 0) {
      const parentIndex = this.getParentIndex(currentIndex);
      if (this.heap[parentIndex] >= this.heap[currentIndex]) break;
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
    }
  }

  extractMax() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return max;
  }

  heapifyDown() {
    let currentIndex = 0;
    while (this.getLeftChildIndex(currentIndex) < this.heap.length) {
      let largestChildIndex = this.getLeftChildIndex(currentIndex);
      const rightChildIndex = this.getRightChildIndex(currentIndex);

      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex] > this.heap[largestChildIndex]
      ) {
        largestChildIndex = rightChildIndex;
      }

      if (this.heap[currentIndex] >= this.heap[largestChildIndex]) break;

      this.swap(currentIndex, largestChildIndex);
      currentIndex = largestChildIndex;
    }
  }

  peek() {
    return this.heap.length > 0 ? this.heap[0] : null;
  }

  size() {
    return this.heap.length;
  }

  static fromArray(array) {
    const heap = new MaxHeap();
    array.forEach(item => heap.insert(item));
    return heap;
  }
}

export default MaxHeap;
