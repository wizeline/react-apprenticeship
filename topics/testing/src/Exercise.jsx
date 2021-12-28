import React from 'react'

const Exercise = () => {
    const [person, setPerson] = React.useState("");
    const [isVisible, setIsVisible] = React.useState(false);
    return (
        <div>
            <p>Put your name on the input</p>
            <input type="text" onChange={(e) => setPerson(e.target.value) }/>
            <button onClick={() => setIsVisible(v => !v)}>Say hello</button>
            {isVisible && <p>Hello {person}</p>}
        </div>
    )
}

export default Exercise
