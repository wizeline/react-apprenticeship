# Clean Code

- What is clean code?

Is elegant and efficient,simple and direct, the logic should be straightforward with minimal dependencies and performance close to optimal. 

It has meaningful names and it provides one way  rather than many ways for doing one thing.
Don't contain duplication and Expresses all the design ideas that are in the system, it reads like well-written prose, Clean code does one thing well.

<br />

## DRY - Don't Repeat Yourself
Every piece of knowledge must have a single unambiguous, authoritative representation within a system.

DRY is more than code is about the duplication of knowledge, of intent. It's about expressing the same thing in two different places, possibly in two totally different ways.

<br />

## YAGNY - You Aren't Gonna Need It.
Impement things when you actually need them, never when you just foresee that you need them.
Following YAGNI helps us to avoid over-engineering a solution. You don't want to spend time on future scenarios that are unknown. The problem with implementing a feature that you think might eventually be needed is that quite often the feature ends up not being needed or the requirements for it change.

<br />

## KISS - Keep it Simple Stupid
The idea behind KISS is that systems work best when they are kept simple, some ways to apply this principle to software include:
- Eliminating duplication (DRY principle)
- Not developing unnecessary features (YAGNI)
- Hiding complexity.
- Following known standards when possible and minimizing deviations and surprises.

But don't make it overly simple that compromises functionality and delivery.

<br />

## Naming

- ### Use intention reveling names
The name of a variable, function, class etc, should tell why it exists, what it does and how it is used. If the name requires a comment them is not a good name.

        let d; //Elapsed days (bad)

        let elapsedDays; //Good, the name indicate purpose


- ### Avoid desinformation
Avoid using names that can be misinterpreted or that can have multiple meanings.
For example, asuming that you handle users, a variable with the name userList must have a list of users as the name implies , it can't contain a string;

        // one will expect an array of users
        // but here is a string with name separated by commas.
        // This is counter intuitive
        let userList = "Garry, Viktor, Vladimir";



- ### Use pronounceable Name

- ### Use Searchable Names

- ### Class Names

- ### Method Names

<br />

## Functions
- Small
- Do one thing
- Reading code from top to bottom.
- use descriptive names
- Function arguments

<br />

## Comments
- does and don'ts
- Include commented out code.

<br />


## Refactor example
- Make an example refactor on the live session where we apply all.

