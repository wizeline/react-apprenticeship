
import React , {useEffect, useState} from 'react'

const Rerender : React.FC = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        console.log('useEffect');
        return () => {
            console.log('useEffect cleanup');
        }
    });

    return (
        <div className="example-area">
            <h1>Counter:{counter}</h1>
            <button onClick={() => setCounter(counter + 1)}> Change counter</button>
        </div>
    )
}

export default Rerender
