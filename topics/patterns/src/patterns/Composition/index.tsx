import React from "react";
import Frame from "./Frame";
import Body from "./Body";
import Title from "./Title";
import Content from "./Content";

const Composition = () => {
  return (
    <Frame>
      <Title>Composition</Title>
      <Body>
        <Content />
      </Body>
    </Frame>
  );
};
export default Composition;
