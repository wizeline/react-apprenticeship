import React from "react";

const Counter: React.FC<{
  initialCount: number;
}> = ({ initialCount }) => {
  const [count, setCount] = React.useState(initialCount);
  const reset = () => setCount(initialCount);

  return (
    <div>
      {count} - 
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
