import React from 'react';
import './App.css';

type Person = {
  name: string;
  age: number;
}

const data: Person[] = [
  {
    name: "Tal",
    age : 83,
  },
  {
    name: "Karpov",
    age : 70,
  }
]


const PersonCard : React.FC<{someone : Person}> = ({someone}) => {
  function getAge(age: number) : string {
    return `${age} years old`
  }
  return (
    <div>
      <h1>{someone.name}</h1>
      <h2>{getAge(someone.age)}</h2>
    </div>
  )
 }

function App() {
  return (
    <div className="App">
      {data.map(person => <PersonCard key={person.name} someone={person}/>)}
    </div>
  );
}



export default App;
