import React from "react";
import "./App.css";
import ListMemo from "./components/ListMemo";
import List from "./components/List";

const data = [
  "Steinitz",
  "Lasker",
  "Capablanca",
  "Alekhine",
  "Botvinnik",
  "Tal",
  "Petrosian",
  "Spassky",
  "Fischer",
  "Karpov",
  "Kasparov",
];
function App() {
  const [champions, setChampions] = React.useState(data);

  const reverseList = () => {
    console.log("Reversing List");
    setChampions([...champions.reverse()]);
  };

  return (
    <div className="App">
      <h1>Memoization</h1>
      <button onClick={reverseList}>Reverse List</button>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div>
          <h2>Memoized</h2>
          <ListMemo list={champions} />
        </div>
        <div>
          <h2>Not Memoized</h2>
          <List list={champions} />
        </div>
      </div>
      <p>
        We have 2 lists that renders components, one memoized (left) and the
        other without memoization.
      </p>
      <p>
        Check the console to see the behaviour, the first time every component
        gets rendered, but after updating the list by clicking the button for
        reversing the list, only the components that are not memoized will re render.
      </p>
    </div>
  );
}

export default App;
