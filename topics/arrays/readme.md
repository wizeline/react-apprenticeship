# Array Operations

One key thing to consider every time we work with React is the concept of immutability, which means that to re-render things, we need to pass them on to new data. We usually do this by copying the data, modifying it, and returning it. Javascript provides the following methods to work with arrays to do our operations and return a new array:
 - Map
 - Filter
 - Spread Operator


## Map
Map is probably the most used method when working with arrays on React. Map allows iterating over an array and returning a new array with the result of the callback function and allows to render a series of components from the original array's data. As an example, we have an array of persons, and the Map method helps us render a list of persons from that array.

    const people = ["Jose Raul", "Alexander", "Mikhail","Bobby", "Garry"]

    //We can render this list:
    <ul>
     {people.map(name => <li key={name}>{name}</li>)}
    </ul>


In the example above, we go through the whole array of data and convert it into a list of components.



## Filter

The Filter method returns an array with the items of the original array that passed a test specified in a callback function. This method is convenient to remove items from the original array. Consider the below example:

    const champions = [ 
        {
            name : "Boris Spassky",
            country : "USSR",
        },
        {
            name : "Robert James Fischer",
            country : "USA",
        },
        {
            name : "Jose Raul Capablanca",
            country : "CUBA"
        },
        {
            name : "Anatoly Karpov",
            country : "USSR",
        },
    ]

    // This creates an array without Boris Spassky and Anatoly Karpov
    const notUssr = champions.filter(champion => champion.country !== "USSR");

    // This creates an array only with the USSR champions
    const onlyUssr = champions.filter(champion => champion.country === "USSR");


## Spread

The Spread operator “...” allows us to *expand* an array. This operator is convenient when creating a new array and adding a new item. Remember the importance of creating a modified copy of the data and not mutating it directly, and this means “a push will not do the job.”

    const players = [
        {
            name : "Boris Spassky",
            country : "USSR",
        }
    ]

    const fischer = {
        name : "Robert James Fischer",
        country : "USSR"
    }

    // This will add the object fischer to the array matchOfTheCentury
    const matchOfTheCentury = [...playes, fischer];
    
    // if we print the array matchOfTheCentury we will get
    [
        {
            name : "Boris Spassky",
            country : "USSR",
        },
        {
        name : "Robert James Fischer",
        country : "USSR"
        }
    ]

    and the two arrays will be different, players remains untouched and we got ourserlfs a new array by spreading the players array and adding at the end a new item.

