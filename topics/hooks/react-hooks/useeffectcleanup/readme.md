# Clean Up components

If a useEffect returns a function, react will run it after the component is unmounted or re-evaluated, this comes very handy for cleaning up timers or cancelling promises that we won't be needing after a change in the component.


## Uses

### With a dependencies
        useEffect(()=>{
            return () => {
                // Do something after the component gets re-evaluated
                // only when dependency changes
            }
        },[dependency])


### With no dependencies

    useEffect(() => {
        return () => {
            // This will run only one time
            // when the component gets unmounted
        }
    }, [])

### On Every Re-render
> Note that there is no dependency array in the useEffect

    useEffect(()=>{
        return  () => {
            // This will run every time the component re-renders 
            // for what ever reason (props changes etc).
        }
    })
