import {useEffect , useLayoutEffect} from 'react';


function App() {
  useEffect(() => {
    console.log('useEffect');
  }, [])


  useLayoutEffect(() => {
    console.log('useLayoutEffect');
  },[])

  console.log('Component being evaluated');

  return (
    <div className="App">
        <p>Check your console to see the logs, the one from useLayoutEffect will show first</p>
    </div>
  );
}

export default App;
