import React from "react";
import Counter from "./Counter";

const StateInitializer = () => {
  return (
    <div>
      <h1>State Initializer</h1>
      <Counter initialCount={0} />
      <Counter initialCount={10} />
    </div>
  );
};
export default StateInitializer;
