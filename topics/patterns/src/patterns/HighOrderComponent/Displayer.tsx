import React from 'react'

const Displayer : React.FC<{data : any}> = ({data, ...props}) => {
    return (
        <div  {...props}>
            Here is your data: 
            {JSON.stringify(data)}
        </div>
    )
}

export default Displayer
