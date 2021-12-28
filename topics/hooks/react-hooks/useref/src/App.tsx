import { useRef } from 'react';
import './App.css';

function App() {

  const mutable = useRef<null | string>(null);
  const inputEl = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //This won't cause a re-render
    mutable.current = e.target.value;
  }

  console.log("Component rendering");

  return (
    <div className="App">
      <input ref={inputEl} type="text" onChange={handleChange} />
      <button onClick={() => inputEl.current!.focus()}>Focus the input</button>
      <button onClick={() => alert(mutable.current)}>Show the mutable info</button>
    </div>
  );
}

export default App;
