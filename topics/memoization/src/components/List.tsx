import React from 'react'
import Item from './Item'
const List : React.FC<{list : string[]}> = ({list}) => {

    const title = (function() {
        console.log("Calculating not memoized title");
        return `There are ${list.length} items`
    })()

    const showMessage = () => alert(`We have ${list.length} items`)

    return (
        <div>
            <h3>{title}</h3>
            {list.map((item) => <Item key={item} item={item} callback={showMessage} />)}
        </div>
    )
}

export default List
