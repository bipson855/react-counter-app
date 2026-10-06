import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    
    function increase() {
        setCount(count + 1)
    }

    function decrease() {
        setCount(count - 1)
    }

    function reset() {
        setCount(0)
    }



    return( 
        <>
            <h2>Count: {count}</h2>
            <button onClick={increase} >Increase</button>
            <button onClick={decrease} >Decrease</button>
            <button onClick={reset} >Reset</button>
        </>
    );

}

export default Counter