import React from 'react'
import usePlayer from './usePlayer'
const Description = () => {
    const player = usePlayer()
    return (
        <div>
            {player} is a very good chess player.
        </div>
    )
}

export default Description
