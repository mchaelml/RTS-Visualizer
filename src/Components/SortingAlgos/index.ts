import { insertionSort } from "./InsertionSort";
import { bubbleSort } from "./BubbleSort";
import { selectionSort } from "./SelectionSort";

export interface AlgoProps {
  sortedArray: number[];
  animations: {
    f: number;
    s: number;
    fVal: number;
    sVal: number;
  }[];
}

export const swap = (
  indexPrev: number,
  indexNext: number,
  arr: number[],
): void => {
  const indexPrevVal = arr[indexPrev];
  arr[indexPrev] = arr[indexNext];
  arr[indexNext] = indexPrevVal;
};

const algos = {
  bubbleSort,
  insertionSort,
  selectionSort,
};

export default algos;
