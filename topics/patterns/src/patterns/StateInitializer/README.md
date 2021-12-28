# State Initializer

## The problem
How can we setup a component when we use it, and feed it his firsts values? Imagine we have a counter and we need this counter to start not at 0 but at 10, how do we configure a component to take his initial state.

## The solution
The state initializer pattern works by providing the initial state first through the component's props and setting his internal state.

## Consequences
Components with this pattern can be used multiple times in different ways, the can be configure first and them used. 

This has to be made carefully because there is the restriction that if the prop used to initiate the component's values changes after the component is render can cause for mistakes because the component was initialized and won't get the change.
