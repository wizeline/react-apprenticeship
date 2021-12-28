import { useState } from 'react';
import './App.css';


function App() {
  const [list, setList] = useState<string[]>([]);

  const addUssr = (e: React.MouseEvent) => {
    const ussr = ["Tal", "Karpov"];
    setList( list => [...list, ...ussr]);
  }
  const removeUssr = (e: React.MouseEvent) => {
    setList(list => list.filter(item => item !== "Tal" && item !== "Karpov"));
  }
  const addCapablanca = (e: React.MouseEvent) => {
    setList( list => [...list, "Capablanca"]);
  }
  const removeCapablanca = (e: React.MouseEvent) => {
    setList(list => list.filter(item => item !== "Capablanca"));
  }

  const replaceTal = (e: React.MouseEvent) => {
    if (!list.includes("Tal")) {
      alert("Tal is not in the list, click add USSR champions button");
      return;
    }

    setList( list => list.map(item => item === "Tal" ? "Kasparov" : item));
  }

  return (
    <div className="App">
      <h1>React Array CRUD</h1>
      <button onClick={addUssr}>Add USSR champions</button>
      <button onClick={removeUssr}>Remove USSR champions</button>
      <button onClick={addCapablanca}> Add Capablanca </button>
      <button onClick={removeCapablanca}> Remove Capablanca</button>
      <button onClick={replaceTal}> Replace Tal</button>
      <ul>
        {list.map((item,idx) => (<li key={idx}>{item}</li>))}
      </ul>
    </div>
  );
}

export default App;
