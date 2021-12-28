# useReducer

Sometimes the component's state become complex and we need to perform a series of operations here is when we can use the useReducer hook wich is like useEffect on steroids, is the same concept used on Flux where you dispatch actions that triggers the execution of a reducer function that mutates the state.


## Using useReducer

        const initialState = {} //Default initialState

        function reducer(state, action){
            //Logic that changes the state
        }


        function BankAccount(){
            const [state, dispatch] = useReducer(reducer,initialState);

            return (
                <>
                    {JSON.stringify(state)}
                    <button onClick={() => dispatch("someaction)}>
                </>
            )
        }


All we need to do is to define a reducer function that most be a pure function and return a copy of the state and a default state. Then useReducer will give us the state of the application and the dispatch function that we use to execute the reducer and passing it the info about what we need to do in form of an action.
