import React, { ReactElement } from "react";
import styled from "styled-components";

import BubbleSort from "../SortingAlgos/BubbleSort";

const Container = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 10%;
`;

const Main = (): ReactElement => {
  //const [play, setPlay] = useState(false);
  const selected = <BubbleSort />;

  return <Container>{selected}</Container>;
};

export default Main;
