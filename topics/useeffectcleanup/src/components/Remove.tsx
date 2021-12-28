import React, { useEffect, useState } from "react";

const Remove: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="example-area">
      <button onClick={() => setIsVisible((visible) => !visible)}>
        Toggle
      </button>
      {isVisible && <TargetExample />}
    </div>
  );
};

const TargetExample: React.FC = () => {
  useEffect(() => {
    console.log("Rendering TargetExample");

    return () => {
      console.log("Removing TargetExample");
    };
  }, []);

  return <h1>I'm visible?</h1>;
};

export default Remove;
