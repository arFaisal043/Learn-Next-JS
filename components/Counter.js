"use client"
import { useState } from "react";

const Counter = () => {
    const [val, setVal] = useState(0);

    function increment() {
        setVal(val + 1)
    }

    return (
        <div>
            <h1> {val}</h1>
            <button onClick={increment}>Increment</button>
        </div>
    );
};

export default Counter;