import React, { useContext } from "react";
import { ClientsContext } from "../App";

const AddClient = () => {
  const { clients, setClients } = useContext(ClientsContext);
  const [name, setName] = React.useState("");
  const [age, setAge] = React.useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setClients([...clients, { id: clients.length, name, age }]);
    setName("");
    setAge(0);
  };

  return (
    <div>
        <h1>Add Client</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
      />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
};

export default AddClient;
