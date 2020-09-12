import React, { ReactElement, useState, useEffect } from "react";
import styled from "styled-components";

import { default as Algorithms, AlgoProps } from "../SortingAlgos/index";

const ANIMATION_SPEED = 50;

const MainContainer = styled.div`
  margin: auto;
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Column = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const Row = styled.div`
  display: inherit;
  flex-direction: row;
  width: inherit;
  margin: 5vh 0;
  justify-content: space-between;
`;

// type ElementProps = {
//   width: number;
//   height: number;
// };

// const Element = styled.div<ElementProps>`
//   width: ${(props) => props.width}%;
//   height: ${(props) => props.height}%;
//   background-color: black;
//   margin: 0 2px;
// `;

const generatedArray = (): number[] =>
  Array(200)
    .fill(1)
    .map((_v) => Math.floor(Math.random() * 100 * _v));

const Main = (): ReactElement => {
  //const [play, setPlay] = useState(false);
  const [bubbleArray, setBubbleArray] = useState(generatedArray());
  const [docs, setDocs] = useState<HTMLCollectionOf<HTMLElement> | never[]>([]);

  useEffect(() => {
    setDocs(
      document.getElementsByClassName("bubble") as HTMLCollectionOf<
        HTMLElement
      >,
    );
  }, []);

  function resetArray(): void {
    setBubbleArray(generatedArray());
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
  // TODO rework this for better performance + cleaner code
  const animationStart = (array: AlgoProps): void => {
    const { animations } = array;
    for (let y = 0; y < animations.length; y++) {
      ((i): void => {
        const F = docs[animations[i].f];
        const S = docs[animations[i].s];
        setTimeout(() => {
          // F.style.backgroundColor = "green";
          // S.style.backgroundColor = "green";
          F.style.height = `${animations[i].fVal}%`;
          S.style.height = `${animations[i].sVal}%`;
        }, ANIMATION_SPEED * i);
        setTimeout(() => {
          const el = animations[i];
          const fPercent = (el.f / animations.length) * 1000;
          const sPercent = (el.f / animations.length) * 1000;
          docs[
            el.f
          ].style.background = `linear-gradient( red ${fPercent}%, yellow ${
            100 - fPercent
          }%)`;
          docs[
            el.s
          ].style.background = `linear-gradient( red ${sPercent}%, yellow ${
            100 - sPercent
          }%)`;
        }, ANIMATION_SPEED * i + ANIMATION_SPEED);
      })(y);
    }
  };

  const startBubbleSortAnimations = (): void => {
    const sorted = Algorithms.bubbleSort([...bubbleArray]);
    animationStart(sorted);
  };

  const startInsertSortAnimations = (): void => {
    const sorted = Algorithms.insertionSort([...bubbleArray]);
    animationStart(sorted);
  };

  const startSelectionSortAnimations = (): void => {
    const sorted = Algorithms.selectionSort([...bubbleArray]);
    animationStart(sorted);
  };

  return (
    <MainContainer>
      <Column>
        <Container>{renderElements}</Container>
        <Row>
          <button onClick={(): void => startBubbleSortAnimations()}>
            Start Bubble Sort
          </button>
          <button onClick={(): void => startInsertSortAnimations()}>
            Start Insert Sort
          </button>
          <button onClick={(): void => startSelectionSortAnimations()}>
            Start Selection Sort
          </button>
          <button onClick={(): void => resetArray()}>Reset</button>
        </Row>
      </Column>
    </MainContainer>
  );
};

export default Main;
