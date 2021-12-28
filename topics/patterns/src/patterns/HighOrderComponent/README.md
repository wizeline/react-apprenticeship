# HighOrderComponent

## The problem
How to add functionality to a component from the outside and maintaining its propierties?

## The solution
Use a HOC to add functionality, and HOC is a function that receives a component and returns another component, the memo function from React used to memoize a component is an HOC.

## Consequences
We correctly decouple logic from a component and the solution implemented in the HOC can be used with many components. Is another way to abstract logic.
