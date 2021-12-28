import React from 'react';
import usePlayer from './usePlayer';

const Greeting = () => {

    const player = usePlayer();

    return (
        <div>
            Hello {player}
        </div>
    )
}

export default Greeting
