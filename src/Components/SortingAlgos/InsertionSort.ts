import { AlgoProps, swap } from ".";

export const insertionSort = (array: number[]): AlgoProps => {
  // Write your code here.
  const len = array.length;
  const animationsArray = [];
  let start = 0;
  while (start < len - 1) {
    if (array[start] > array[start + 1]) {
      let pos = start;
      while (array[pos] > array[pos + 1]) {
        swap(pos, pos + 1, array);
        animationsArray.push({
          f: pos,
          fVal: array[pos],
          s: pos + 1,
          sVal: array[pos + 1],
        });
        pos--;
      }
    }
    start++;
  }
  return { sortedArray: array, animations: animationsArray };
};
