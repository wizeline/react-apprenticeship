import React from 'react';
import './App.css';
import useToggle from './hooks/useToggle';
import useClock from './hooks/useClock';

function App() {
  const [isVisible , toggle] = useToggle();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hooks</h1>
        <button onClick={toggle}>Toggle</button>
        {isVisible && <Timer />}

        <p>Open your console to see the logs, when the Timer components gets unmounted the hook useClock handles all the logic including clearing the interval to avoid memory leaks.</p>
      </header>
    </div>
  );
}

const Timer = () => {
  const time = useClock();
  return <h2>{time.toLocaleTimeString()}</h2>;
}

export default App;
