import React, { ReactElement, useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Column = styled.div`
  height: 100%;
  width: 100%;
`;

type ElementProps = {
  width: number;
  height: number;
};

const Element = styled.div<ElementProps>`
  width: ${(props) => props.width}%;
  height: ${(props) => props.height}%;
  background-color: black;
  margin: 0 2px;
`;

const bubbleSortArray = (): number[] =>
  Array(200)
    .fill(1)
    .map((_v) => Math.floor(Math.random() * 100 * _v));

function swap(indexPrev: number, indexNext: number, arr: number[]): void {
  const indexPrevVal = arr[indexPrev];
  arr[indexPrev] = arr[indexNext];
  arr[indexNext] = indexPrevVal;
}

interface BubbleSortProps {
  sortedArray: number[];
  animations: {
    f: number;
    s: number;
    fVal: number;
    sVal: number;
  }[];
}

const bubbleSort = (array: number[]): BubbleSortProps => {
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
  //console.log("ended ", array);
  return { sortedArray: array, animations: animationsArray };
};

const BubbleSort = (): ReactElement => {
  const [bubbleArray, setBubbleArray] = useState(bubbleSortArray());
  const [elements, setElements] = useState([]);
  //console.log("bubbleArrat", bubbleArray);
  useEffect(() => {
    // setElements(
    //   bubbleArray.map((el: number, key: number) => (
    //     <div
    //       key={key}
    //       className="bubble"
    //       style={{
    //         height: el + "%",
    //         width: 100 / bubbleArray.length + "%",
    //         margin: 2,
    //         backgroundColor: "black",
    //       }}
    //     />
    //   )),
    // );
  }, [bubbleArray]);
  console.log(bubbleArray);
  function resetArray(): void {
    setBubbleArray(bubbleSortArray());
  }
  const renderElements: ReactElement[] = bubbleArray.map(
    (el: number, key: number) => (
      <div
        key={key}
        className="bubble"
        style={{
          height: el + "%",
          width: 100 / bubbleArray.length + "%",
          margin: 2,
          background: "black",
        }}
      />
    ),
  );
  const findElement = (key: number) => renderElements[key];
  //console.log(renderElements);
  //console.log(document.getElementById(animations[0].s));

  const startBubbleSortAnimations = (): void => {
    const sorted = bubbleSort([...bubbleArray]);
    const bubbleSorted = sorted.sortedArray;
    const { animations } = sorted;
    const docs = document.getElementsByClassName("bubble") as HTMLCollectionOf<
      HTMLElement
    >;
    for (let y = 0; y < animations.length; y++) {
      ((i): void => {
        const F = docs[animations[i].f];
        const S = docs[animations[i].s];
        setTimeout(() => {
          F.style.background = "red";
          S.style.background = "red";
          //console.log(docs[animations[i].fVal]);
          F.style.height = `${animations[i].fVal.toString()}%`;
          S.style.height = `${animations[i].sVal.toString()}%`;
        }, 5 * i);
        setTimeout(() => {
          //console.log(" bbbbb ", animations[i].f);
          docs[animations[y].f].style.backgroundImage = `linear-gradient( red ${
            (animations[i].f / animations.length) * 1000
          }%, yellow ${100 - animations.length / animations[i].f}%)`;
          docs[animations[y].s].style.backgroundImage = `linear-gradient( red ${
            (animations[i].f / animations.length) * 1000
          }%, yellow ${100 - animations.length / animations[i].f}%)`;
        }, 5 * (i + 1));
      })(y);
    }
    //setBubbleArray(bubbleSorted);
    // animations.map(el => {
    //     findElement(el.f)
    // })
    //console.log(findElement(animations[0].s).props);
  };
  return (
    <Column>
      <Container>{renderElements}</Container>
      <button onClick={(): void => startBubbleSortAnimations()}>Start</button>
      <button onClick={(): void => resetArray()}>Reset</button>
    </Column>
  );
};

export default BubbleSort;
