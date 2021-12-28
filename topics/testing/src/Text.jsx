import React , {useState} from 'react';
const Text = () => {

    const [isVisible, setIsVisible] = useState(false);
    return (
        <div>
           { isVisible && <p>Hidden text</p>}
            <button onClick={() => setIsVisible(v => !v)}>Click me to show the hidden text</button>
        </div>
    )
}

export default Text
