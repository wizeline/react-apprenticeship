# Clean Code

**What is Clean Code?**

Clean Code is elegant, efficient, simple, and direct. The logic should be straightforward with minimal dependencies and performance close to optimal. 

It has meaningful names, and it provides one way rather than many different ways of doing one thing. Do not contain duplication and express all the design ideas in the system. It is read like well-written prose. Clean Code does one thing well.

<br />

## DRY - Don't Repeat Yourself
Every piece of knowledge must have a single, unambiguous, and authoritative representation within a system.

**DRY** is more than code. It is about the duplication of knowledge. It is about expressing the same thing in two different placemores, possibly in two different ways.

<br />

## YAGNY - You Aren't Gonna Need It.
Implement things when needed, never when you foresee that you need them.
Following **YAGNI** helps us to avoid over-engineering a solution. You do not want to spend time on unknown future scenarios. The problem with implementing a feature that you think might eventually be needed is that the feature often ends up not being needed or the requirements for it change.

<br />

## KISS - Keep it Simple Stupid
The idea behind KISS is that systems work best when they are kept simple. Some ways to apply this principle to the software include:
- Eliminating duplication (DRY principle).
- Not developing unnecessary features (YAGNI).
- Hiding complexity.
- Following known standards when possible and minimizing deviations and surprises.

However, do not make it overly simple that compromises functionality and delivery.

<br />

## Naming

### Use Intention Revealing Names
The name of variables, functions, and classes should tell why they exist, what they do, and how they are used. If the name requires a comment then it is not a good name.

        let d; //Elapsed days (bad)

        let elapsedDays; //Good, the name indicate purpose


### Avoid Desinformation
Avoid using names that can be misinterpreted or that can have multiple meanings.
For example, assuming that you handle users, a variable with the name `userList` must have a list of users as the name implies. It cannot contain a string:

        // one will expect an array of users
        // but here is a string with name separated by commas.
        // This is counter intuitive
        let userList = "Garry, Viktor, Vladimir";



### Use Pronounceable Names
 Names have to mean something, and if they do different things, they also need to have different names, for example:

        function dobleItems(a, b){
                a.forEach((i) => b.push(i*2) );
        }

        In this case it is better to call a and b with source and target

        function dobleItems(source, target){
                source.forEach((current) => target.push(current*2) );
        }


Avoid redundant words. For example, you have a class called `Product`. If you have another class named `ProductData` or `ProductInfo`, you named them differently, but they do not mean something different. The prefixes *Info* and *Data* are just noise.

### Use Searchable Names

When using a single-letter name for a variable is hard to know what it does, and numeric constants are hard to understand because they do not give you much information. Compare both examples; the first one is just a math operation. We do not know what these numbers are, but we know exactly what is going on in the second one.

        function calculateDays(s){
                return s * 60 * 60 * 24;
        }


        function calculateDays(seconds){
                const SECONDS_IN_MINUTE = 60;
                const MINUTES_IN_AN_HOUR = 60;
                const HOURS_IN_A_DAY = 24;

                return seconds / SECONDS_IN_MINUTE / MINUTES_IN_AN_HOUR / HOURS_IN_A_DAY;
        }


<br />

## Functions
### Small

Functions should be small, not longer than 30 lines of code.

### Do One Thing

__Functions should do one thing only, and well done.__

If a function is doing more than one operation, this can be split into multiple smaller functions. The example below shows a function that is doing multiple operations and can be split into multiple sub-operations:

        //Wrong, doing too many things
        function calculatePayment(employee){
                let hourlyRate;

                switch(employee.job){
                        case "astronaut" : hourlyRate = 5000;
                        break;
                        case "manager" : hourlyRate = 1000;
                        break;
                        case "director" : hourlyRate = 2000;
                        break;
                        default : hourlyRate = 500;
                }

                const workDays = employee.hoursPerDay * 5;

                return hourlyRate * workDays;
        }




         //------------------
        // Right, doing one thing per function
        function calculatePayment(employee){
                const hourlyRate = getEmployeeHourlyRate(employee);
                const workDays = getEmployeeWorkDays(employee);

                return hourlyRate * workDays;
        } 


        function getEmployeeHourlyRate(employee){
                switch(employee.job){
                    case "astronaut" : return 5000;
                    case "manager" : return 1000;
                    case "director" : return 2000;
                    default : return  500;
                }
        }

        function getEmployeeWorkDays(employee){
                return employee.hoursPerDay * 5;
        }

### Reading Code from Top to Bottom.

It is better to write them down from top to bottom when having multiple functions. The one at the top is the top level of the abstraction, and at the bottom, the functions the top function uses. For example, we have function A, which uses functions B and C. The top function will be A, and below it, we should find B and C (check the code from the previous topic).

```javascript
function A(){
        B();
        C();
}

function B(){
        //more code
}

function C(){
        //more code
}

```

### Function Arguments

Try to have as few arguments as possible, as a general rule up to three. More than three arguments require justification. Functions with many arguments add mental overload.

<br />

## Comments
Comments are not a way to fix wrong code, extended functions, or lousy naming. Adding a comment will not make it clean. You should be able to express yourself in the code.

Comments are helpful when used correctly:
- The comment has legal comments.
- The comment is informative.
- The comment is an explanation.
- The comment is a clarification.
- The comment is a warning of consequences.
- The comment is a to-do.
- The comment is an amplification.

Comments are not helpful when:
- The comment has inappropriate Information.
- The comment is obsolete.
- The comment is redundant.
- The comment is poorly written.
- The comment is commented out of the code.

Keep in mind that comments need to be updated as code evolves. So when you add a comment, you also add the responsibility of keeping this comment out to date.

<br />


## Refactor example
**Make an example refactor on the live session where we apply all.**

- Define Clean Code.
- Concepts to keep in mind.
- Naming.
- Functions.
- Comments.
