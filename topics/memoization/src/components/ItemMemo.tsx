import React, { memo } from "react";

const ItemMemo: React.FC<{item : string , callback : () => void}> = ({callback, item}) => {
    console.log("Memoized item rendering ", item);
    
    return (
        <div onClick={callback}>
            {item}
        </div>
    )
};

export default memo(ItemMemo);
