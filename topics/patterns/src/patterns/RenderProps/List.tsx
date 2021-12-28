import React from 'react'

const List : React.FC<{render : (item : string, key  : number)=>any,items : string[]}> = ({
    render,
    items
}) => {
    return (
        <ul>
            {items.map((item : string ,key : number)=>render(item,key))}
        </ul>
    )
}

export default List
