 # TypeScript
 We will use typescript when we need a more strict way to pass data. We need to define the data type we pass using types definitions.


 ## Type definitions
 ### Primitive
 - **Number**
 - **String**
 - **Boolean**
 - **Null**
 - **Undefined**
 - **Array**



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
 We can make our data type to describe more complex structures. We use the keyword `type` and specify what type the data will be.

        type Person = {
            name : string;
            age : number;
            isAwake : boolean;
        }

Once the type is defined, we can use it as an input for a function or an array.

## Type Check
The below function is an example of how to check the type definition of an array of persons:

        function sayHelloToPersons(persons : Person[]) : void {
            //This will say hello to many people
        }

Functions also need a return type; sometimes, a function returns a value and sometimes will not. For a function that does not return a value, we use a type of data called `void`. Please refer to the above function. The above function called `sayHellowToPersons` does not return anything, but if you look at below’s function, you can see it returns a string:


        function generateHello(person : Person) : string {
            return `hello ${person.name}`;
        }

In **React**, Type Definitions are used to ensure a component gets the correct props. Please refer to the below example:

        const PersonCard : React.FC<{someone : Person}> = ({someone}) => {
            //This component will render the person info
        }
> **Note**: The `React.FC` is a type definition for **Functional Components** (FC). This is mandatory for working with **Typescript** and **React**.

The component receives a prop named `someone` who is a type `person`; hence, we can expect it to have a `name`, `age`, and a property called `isAwake`.

