# useLayoutEffect

This hook is like useEffect but happens before. Most of the time you will want to go with useEffect, but sometimes can become handy when you need to do some work related to the browser paint like mutating the DOM or perform measurements. The order of events is as follows:

- Render
- useLayoutEffect
- Browser paint
- useEffect

The way to use it is exactly like useEffect

    useLayoutEffect(() => {
        //do something before Browser paint
    },[dependency]);
