# useRef

useRef returns a mutable object, the importance of this is that now we have a way to store and change something without re-rendering the component. The value from using useRef will last for the full lifetime of the component. The returned object will have a propierty called current (ref.current) wich is the one that holds the mutable value.

Typically we use refs to "point" to nodes in the DOM.

    const nameRef = useRef(null)

    // Later on the function return

    <input ref={nameRef} type="text" name="name" />

    // With this now we can access the component directly

    nameRef.current.focus();
