/**
 * A MinHeap is a binary tree where the value of each node is less than or equal to the values of its children.
 * The smallest value is always at the root. This is how a MinHeap is structured:
 *
 *          1
 *        /   \
 *       3     6
 *      / \   / \
 *     5   9 8  10
 *    / \
 *   15 17
 *
 * In an array representation, it looks like this:
 * [1, 3, 6, 5, 9, 8, 10, 15, 17]
 */

class MinHeap {
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
  
  hasParent(index) {
    return this.getParentIndex(index) >= 0;
  }
  
  hasLeftChild(index) {
    return this.getLeftChildIndex(index) < this.heap.length;
  }
  
  hasRightChild(index) {
    return this.getRightChildIndex(index) < this.heap.length;
  }
  
  parent(index) {
    return this.heap[this.getParentIndex(index)];
  }
  
  leftChild(index) {
    return this.heap[this.getLeftChildIndex(index)];
  }
  
  rightChild(index) {
    return this.heap[this.getRightChildIndex(index)];
  }
  
  swap(indexOne, indexTwo) {
    const temp = this.heap[indexOne];
    this.heap[indexOne] = this.heap[indexTwo];
    this.heap[indexTwo] = temp;
  }
  
  insert(data) {
    this.heap.push(data);
    this.heapifyUp();
  }
  
  heapifyUp() {
    let index = this.heap.length - 1;
    while (this.hasParent(index) && this.parent(index) > this.heap[index]) {
      this.swap(this.getParentIndex(index), index);
      index = this.getParentIndex(index);
    }
  }
  
  remove() {
    if (this.heap.length === 0) {
      throw new Error('Heap is empty');
    }
    const minItem = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return minItem;
  }
  
  heapifyDown() {
    let index = 0;
    while (this.hasLeftChild(index)) {
      let smallerChildIndex = this.getLeftChildIndex(index);
      if (this.hasRightChild(index) && this.rightChild(index) < this.leftChild(index)) {
        smallerChildIndex = this.getRightChildIndex(index);
      }
      if (this.heap[index] < this.heap[smallerChildIndex]) {
        break;
      } else {
        this.swap(index, smallerChildIndex);
      }
      index = smallerChildIndex;
    }
  }
  
  peek() {
    if (this.heap.length === 0) {
      throw new Error('Heap is empty');
    }
    return this.heap[0];
  }
}

export default MinHeap;
