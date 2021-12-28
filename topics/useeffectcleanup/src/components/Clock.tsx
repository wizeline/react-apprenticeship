import React from 'react'
import { useEffect, useState } from 'react'
const Clock : React.FC = () => {
    const [increase, setIncrease] = useState<number>(1)


    return (
        <div className="example-area">
            <h1>Clock</h1>
            <button onClick={() => setIncrease(value => value+1)}> Increase </button>
            <button onClick={() => setIncrease(value => value <= 1 ? 1 : value -1)}> Decrease </button>
            <TickTack increase={increase} />
        </div>
    )
}


const TickTack : React.FC<{increase : number}> = ({increase}) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(count  => count + 1)
        }, increase * 1000)
        return () => {
            console.log('Increase change, clearing setInterval')
            clearInterval(interval)
        }
    },[increase])
    
    return (<p>Ticking every {increase} seconds, tick # {count}</p>)
}

export default Clock
