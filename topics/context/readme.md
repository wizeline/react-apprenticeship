# Context API

We usually pass data between components from parent to child, but if the tree has multiple levels of nesting, we can end up with the so-called prop Drilling Anti-pattern. Creating a context allows us to share data between components and is especially useful when we have a group of components with a common goal. We can share the state among them, have as many contexts as we need, and handle their scope easily. Think of the **Context API** as a way to have smaller states; for some small applications, this can replace tools like Redux but keep in mind that the context is not optimized to handle too many changes.

To implement the **Context API** on functional components you need:

- `createContext`: It is a function from React that creates a context object.

- `Context.Provider`: It is a component that has to be the parent for all other components that need access to the context.

- `useContext`: It is a **hook** from **React** that receives the context reference and returns the data in the context. `UseContext` is used in the client components to access the information.


        const ExampleContext = React.createContext(defaultValue);
        
        function App(){
                return (
                    <ExampleContext.Provider value={"info"}>
                        <ClientComponent />
                    </ExampleContext.Provider>
                )
        }

        function ClientComponent(){
            const contextValue = useContext(ExampleContext);
            //contextValue will hold the string "info"

            return (<p>{contextValue}</p>)
        }

**Note**: In above’s example the values were not passed as a prop but uses the **Context API**. This is not a practical example but helps to illustrate the point.