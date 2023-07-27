import React from 'react';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react'; 

function UseEffect() {
    const [input, setTnput] = useState("");

    useEffect(() => {
        document.title = input;
    }, [input]);
  return (
    <div>
        <h1>{input}</h1>
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          onChange={(e) => setTnput(e.target.value)} 
          type="text"
        />
    </div>
  )
}

export default UseEffect