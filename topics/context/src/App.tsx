import React from "react";
import "./App.css";
import AddClient from "./components/AddClient";
import ListClient from './components/ListClient';

export type Client = {
  id: number;
  name: string;
  age: number;
};


type ClientsContextType = {
  clients: Client[];
  setClients : (clients: Client[]) => void;
}

export const ClientsContext = React.createContext<ClientsContextType>({
  clients: [],
  setClients: () => {}
});

function App() {
  const [clients, setClients] = React.useState<Client[]>([]);

  return (
      <ClientsContext.Provider
        value={{ clients , setClients  } }
      >
        <div className="App">
        <AddClient />
        <ListClient />
        </div>
      </ClientsContext.Provider>

  );
}

export default App;
