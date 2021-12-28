# Custom Hooks

## Intent
Write logic outside the components that can be used inside the component after, not depending on a concrete component to hold the logic.

## Motivation
Often we need to perform the same task on diferent parts of the application and duplicating code is not an option because it breaks the DRY rule, also it helps to break the functionalities so other team member can implement it.

## Applicability
Use the custom Hooks Pattern when:

- You need to share logic between components
- You neet to abstract the functionality away from the components.
