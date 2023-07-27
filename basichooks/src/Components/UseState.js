import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';


function UseState() {
    const [count, setCount] = useState(0);

    const increment = () => {
        // setCount(count+1);
        //Even if we apply setCount 3 times stil it will increment one time
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
    }

    return (
        <div>
            <h1>{count}</h1>
            {/* <Button onClick={() => setCount(count+1)}>Increment</Button> */}
            <Button onClick={increment}>Increment</Button>
        </div>
    );
}

export default UseState;
