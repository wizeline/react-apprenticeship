import React from "react";
import "./App.css";
import Clock from "./components/Clock";
import Remove from "./components/Remove";
import Rerender from "./components/Rerender";

function App() {
  return (
    <>
      <div className="App">
        <Clock />
        <Remove />
        <Rerender />
      </div>
      <p style={{textAlign : "center"}}>Please open your console to see the logs</p>
    </>
  );
}

export default App;
