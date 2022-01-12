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
 Names have to mean something and if they do different things they also need to have different names, for example.

        function dobleItems(a, b){
                a.forEach((i) => b.push(i*2) );
        }

        In this case it is better to call a and b with source and target

        function dobleItems(source, target){
                source.forEach((current) => target.push(current*2) );
        }


Avoid noise words that are redundant, for example imagine you have a class called Product. If you have another class named ProductData or ProductInfo you have made the name differents but they don't mean something different, the prefixes Info and Data are just noise.

- ### Use Searchable Names

When using a single-letter name for a variable is hard to know what is does and numeric constants are hard to understand because they don't give you much information. Compare both examples, the first one is just a math operation we don't really know what this numbers are, but the second one we know exaclty what is going on.

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

### Do one thing

__Functions should do one thing. They should do it well. They should do it only.__

If you find that you are doing more than one operation in a function, probably is because you can split this function into multiple smaller functions. Check the example bellow, this function is doing multiple operations and can be split into multiple sub operations.

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



        function calculatePayment(employee){
                const hourlyRate = getEmployeeHourlyRate(employee);
                const workDays = getEmployeeHourlyRate(employee);

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

### Reading code from top to bottom.
### use descriptive names
### Function arguments

<br />

## Comments
- does and don'ts
- Include commented out code.

<br />


## Refactor example
- Make an example refactor on the live session where we apply all.

