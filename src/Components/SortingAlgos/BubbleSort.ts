import { AlgoProps, swap } from ".";

export const bubbleSort = (array: number[]): AlgoProps => {
  // Write your code here.
  //console.log("started");
  const animationsArray = [];
  let start = 1;
  let swapped = false;
  while (start < array.length) {
    swapped = false;
    if (array[start] < array[start - 1]) {
      swap(start - 1, start, array);
      animationsArray.push({
        f: start - 1,
        fVal: array[start - 1],
        s: start,
        sVal: array[start],
      });
      swapped = true;
    }
    start++;
    if (swapped) {
      start = 1;
    }
  }
  for (let y = 1; y < array.length; y++) {
    animationsArray.push({
      f: y - 1,
      fVal: array[y - 1],
      s: y,
      sVal: array[y],
    });
  }
  //console.log("ended ", array);
  return { sortedArray: array, animations: animationsArray };
};
