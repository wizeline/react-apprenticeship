# Context API

Normally we pass data between components from parent to child, but if the tree have multiple levels of nesting we can end up with the so called prop drilling anti pattern. Creating a context allow us to share data between components and is specially usefull when we have a group of components that have a common goal, then we can share the state among then, we can have as many context we need and can handle their scope very easy. Think of the context api as a way to have smaller states, for some small applications this can replace tools like Redux but keep in mind that the context is not optimized to handle too many changes.

To implement the context api on functional components you will need to use:

- createContext : Function from react that creates the creates a context object.

- Context.Provider : Is a component that has to be the parent for all the other components that will have access to the context.

- useContext : Hook from react that receives the context reference and return the data in the context, this hook will be used in the client components to access the information.


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

Note in the example above how we did not pass the value as a prop but using the context api, for this example this is not practical but it helps ilustrate the point.