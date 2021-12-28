import React  from "react";
import Header from "./components/Header";
import TypeList from "./types/PatternListType";

import CustomHook from "./patterns/CustomHooks";
import HighOrderComponents from "./patterns/HighOrderComponent";
import RenderProps from "./patterns/RenderProps";
import StateInitializer from "./patterns/StateInitializer";
import Composition from "./patterns/Composition";
import "./App.css";

const patterns = {
  "CustomHook": CustomHook,
  "HighOrderComponents": HighOrderComponents,
  "RenderProps": RenderProps,
  "StateInitializer": StateInitializer,
  "Composition": Composition,
};

function App() {
  const [pattern, setPattern] = React.useState<TypeList>("CustomHook");

  return (
    <div className="App">
      <Header setPattern={setPattern} patternList={Object.keys(patterns) as TypeList[]} />
      <div className="pattern">
        {React.createElement(patterns[pattern])}
      </div>
    </div>
  );
}

export default App;
