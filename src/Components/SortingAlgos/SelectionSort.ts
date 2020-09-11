import { AlgoProps, swap } from ".";

export const selectionSort = (array: number[]): AlgoProps => {
  // Write your code here.
  let start = 0;
  const animationsArray = [];
  while (start < array.length) {
    const i = start; // i = 0
    for (let y = i + 1; y < array.length; y++) {
      // y = 1
      if (array[y] < array[i]) {
        swap(i, y, array);
        animationsArray.push({
          f: i,
          fVal: array[i],
          s: y,
          sVal: array[y],
        });
      }
    }
    start++;
  }
  return { sortedArray: array, animations: animationsArray };
};
