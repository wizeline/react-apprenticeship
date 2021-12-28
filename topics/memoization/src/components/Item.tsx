import React from 'react'

const Item : React.FC<{item : string, callback : () => void}> = ({item, callback}) => {
   
    console.log("No memoized item rendering ", item);

    return (
        <div onClick={callback}>
            {item}
        </div>
    )
}

export default Item
