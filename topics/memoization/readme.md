# Memoization

Memoization is an optimization technique that will make our apps consume less resources by no recalculating things it doesn't need to be recalculated, an example could be a component that is reciving the same props. Luckly React got us covered by providing 2 hooks and a HoC that will do the trick in different scenarios. 

 - memo
 - useMemo
 - useCallback


## memo()

Is a high order component (HoC) that will compare the props passed and if they are the same then will reuse the latter value avoiding re-calculating the component.

 **When to use it?** : Use it when your components are pure, that means that if for the same input the component will render the same output.

Example:

        import { memo } from 'react';

        const UserCard = ({name}) => {
            return (<p>{name}</p>)
        }

        export default memo(UserCard);



## useMemo
This hook will memoize a calculated value and check for its dependencies, if dependencies don't change them they won't be calculated with every re-render.
The hook will receive a callback to compute the value and an array of dependencies useMemo(callback,dependencies) (kind of like useEffect);

**When to use it?:** 
Use it when you need to do some expensive calculations inside your component that you know won't change if the dependencies are the same.

        import { useMemo } from 'react';
        import hashDigest from './my-digest-lib';

        const UniqueHash = ({name}) => {
            const expensiveDigest = useMemo(() => hashDigest(name),[name]);

            return (<p>{expensiveDigest}</p>)
        }

        export default UniqueHash;


## useCallback
This hooks will memoize callbacks, is like useMemo but for callbacks. If the declaration for a callback don't change if the props wich it depends are the same, then this hook will help us maintain the same reference to the already computed callback.

**When to use it?:** When you have a callback that you don't want to be re evaluated, for example when you pass this function down to a child component and this child is a pure component.


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



> **Note on memoization:** By itself none of this operations are "free", React needs to run some logic to achieve this, so only use them if the re-calculation is more expensive than the memoization, in general terms if you are only rendering one simple component probable you won't need to memoize, but if you render a list of items, or have a complex table filled with lots of data them memoization can help you optimize your app.

