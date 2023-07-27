import React, { useLayoutEffect, useState } from 'react'

function UseLayoutEffect() {
    const [counter, setCounter] = useState(0);

    useLayoutEffect(() => {
        if (counter==0) {
            setCounter(Math.random()*200);
        }
    }, [counter])
  return (
    <div>
        <h1>{counter}</h1>
        <h1 onClick={() => setCounter(0)}>Click for Random</h1>
    </div>
  )
}

export default UseLayoutEffect