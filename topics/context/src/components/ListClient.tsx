import React , {useContext} from 'react'
import { ClientsContext } from "../App";
const ListClient = () => {
    const { clients } = useContext(ClientsContext);

    return (
        <div>
            <h1>Clients</h1>
            <ul>
                {clients.map(client => (
                    <li key={client.id}>
                        {client.name} - {client.age}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ListClient
