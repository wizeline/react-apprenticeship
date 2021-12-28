# Custom Hooks

Hooks are just simple functions that start with the prefix "use" followed by any name we need then to have.

Hooks allow us to reuse code within functional components and to use other hooks inside it, for example we can create our custom hook logic by using any other hooks like useEffect or useState etc.


## Rules to work with custom hooks
 - The name need to start with "use" (ex useToggle)
 - Hooks can't be called inside a loop.
 - Hooks can't be called inside a function.
 - Hooks can only be used with functional components.



## Example
This simple hook hold a simple logic to "show/hide" components on a React functional component.


    import {useState} from 'react';

    const useToggle = () => {
        const [isVisible, setIsVisible] = useState(false);

        const toggle = setIsVisible(visible => !visible);

        return [isVisible, toggle]
    }


To use it you just need to import it and call it.

    import useToggle from './useToggle';

    const Example = () => {
        const [isVisible, toggle] = useToggle();

        return (
            <> 
            <button onClick={toggle}> Toggle visibility </button> 
            {isVisible && <p>I'm here</p>}
        </>)
    }
