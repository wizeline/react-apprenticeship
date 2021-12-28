 # TypeScript
 We will use typescript when we need a more strict way to pass data. We need to define what kind of data we are passing and for that we will use types.


 ## Type definitions
 ### Primitive
 - number
 - string
 - boolean
 - null
 - undefined
 - array



#### Examples

        //Basic types
        let age : number = 18;
        let name : string = "Robert";
        let isAwake : boolean = true;

        // This will throw an error because age most be a number.
        age = "16"

        //Arrays are declared by specifying the type plus [] like:
        const list : string[] = ["one", "two"]; // Array of strings
        

### Custom types
 We can make our own types to describe more complex structures. For that we can use the keyword type and them specify what the type will.

        type Person = {
            name : string;
            age : number;
            isAwake : boolean;
        }

Now we have a type definition we can use as an input for a function or as an array.

## Type Check
To check type definitions for an array of persons into a function we can do:

        function sayHelloToPersons(persons : Person[]) : void {
            //This will say hello to many people
        }

Functions need a return type too, sometimes we will use a function that return some kind of value and some times the function won't return anything and for that we will use the special type called "void" as in the example above. The function sayHellowToPersons won't return anything but if you take a look at the function bellow we can clearly see that will return a string.


        function generateHello(person : Person) : string {
            return `hello ${person.name}`;
        }

In the react world, we can use Type definitions to ensure a component will get the correct props. Take this example:

        const PersonCard : React.FC<{someone : Person}> = ({someone}) => {
            //This component will render the person info
        }
> Note the React.FC, this is a type definition for Functional Components (hence FC), this is mandatory for working with Typescript and React.

The component will receive a prop named someone that will be of Type person, hence we can spect for it to have a name, age and a isAwake propierty.

