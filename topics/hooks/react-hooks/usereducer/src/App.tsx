import React , {useReducer} from 'react';
import './App.css';


type State = {
  balance : number,
  operations : Array<{
    type : string,
    amount : number
  }>
}

type Action = {
  type : string,
  payload : number
}

const initialState = {
  balance : 0,
  operations : []
}

function reducer(state : State, action : Action) {
  switch (action.type) {
    case 'DEPOSIT':
      return {
        ...state,
        balance : state.balance + action.payload,
        operations : [...state.operations, {
          type : 'deposit',
          amount : action.payload
        }]
      }
    case 'WITHDRAW':
      return {
        ...state,
        balance : state.balance - action.payload,
        operations : [...state.operations, {
          type : 'withdraw',
          amount : action.payload
        }]
      }
    default:
      return state
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="App">
      <h1>Account balance: {state.balance}</h1>
      <button onClick={() => dispatch({type : 'DEPOSIT', payload : 100})}>Deposit</button>
      <button onClick={() => dispatch({type : 'WITHDRAW', payload : 100})}>Withdraw</button>
      <h2>Operations</h2>
      <ul>
        {state.operations.map(operation => (
          <li key={operation.type}>
            {operation.type} : {operation.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
