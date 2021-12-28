import React , {useMemo , useCallback} from 'react'
import ItemMemo from './ItemMemo';

const ListMemo : React.FC<{list : string[]}> = ({list}) => {

    const title = useMemo(() => {
        console.log("Calculating memoized title");
        return `There are ${list.length} items`
    } , [list.length]);

    const showMessage = useCallback(() => {
        alert(`We have ${list.length} items`)
    } , [list.length]);

    return (
        <div>
            <h3>{title}</h3>
            {list.map((item) => <ItemMemo key={item} item={item} callback={showMessage} />)}
        </div>
    )
}

export default ListMemo
