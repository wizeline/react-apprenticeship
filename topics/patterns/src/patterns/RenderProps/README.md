# Render props

## The problem
How to make a component flexible enough to be able to dictate some of it behavior from outside

## The solution
WIth the render props pattern, you pass a function to the child component and then the child component will execute this function allowing you to define part of the behavior from outside the component, making a reusable component.

## Consequences
The result is a reusable component in witch you will specify how most render part of itself. The downside to this is that the component needs to be used from a client and cannot be used by itself.