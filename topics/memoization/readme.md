# Memoization

**Memoization** is an optimization technique that makes an application utilize fewer resources by not recalculating unnecessary information. One example is a component receiving the same props. React provides two hooks and a High Order Component (HoC) that help in different scenarios: 

 - `memo`
 - `useMemo`
 - `useCallback`


## memo()

The memo is an HoC that compares the prop passed. If they are the same memo, reuse the latter value avoiding recalculating the component.

 **When to use it?**: When your components are pure, this means that the component will render the same output for the same input.

Example:

        import { memo } from 'react';

        const UserCard = ({name}) => {
            return (<p>{name}</p>)
        }

        export default memo(UserCard);



## useMemo
This **hook** *memoizes* a calculated value and checks for dependencies, if the dependencies do not change they will not be calculated every re-renderization. The hook receives a callback to compute the value and an array of dependencies `useMemo` (callback and dependencies) similar to `useEffect`.

**When to use it?:** 
When you need to do calculations inside your component, it will not change if the dependencies are the same.

        import { useMemo } from 'react';
        import hashDigest from './my-digest-lib';

        const UniqueHash = ({name}) => {
            const expensiveDigest = useMemo(() => hashDigest(name),[name]);

            return (<p>{expensiveDigest}</p>)
        }

        export default UniqueHash;


## useCallback
This **hook** *memoizes* callbacks, similar to `useMemo`. Suppose the declaration for a callback does not change if the props, which depends on, are the same. Then this **hook** maintains the same reference to the already computed callback.

**When to use it?**: When you do not want to re-evaluate a callback. For example, pass this function to a child component, which is a pure component.


        import ItemDetail from './item-detail.js';

        const ParentComponent ({value}) => {
            const increase = useCallback(() => {
               addOne(value)
            },[value])

            const decrease = useCallback(() => {
                removeOne(value)
            },[value])

            return (<ItemDetail 
                     value={value} 
                     increase={increase} 
                     decrease={decrease} />)
        }



> **Note on memoization**: Memoization and its operations are not *free*. **React** needs to run some logic to achieve these operations, so only use them if the re-calculation is more expensive than the *memoization*. In general, if you are only using a simple component, probably, you will not need to *memoize*. However, if you render a list of items or have a complex table filled with a considerable amount of data, *memoization* helps optimize your application.

