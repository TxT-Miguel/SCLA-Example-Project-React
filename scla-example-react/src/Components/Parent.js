import { useState } from 'react';

import Child from "./Child";

const Parent = () => {
    const [count, setCount] = useState(0);

    const countHandler = () => {
        setCount(count + 1);
    }


    return (
        <div>
            <Child passingData="Hello from parent"/>

            <h1>{count}</h1>

            <button onClick={countHandler}>Increment</button>
        </div>
    )
}

export default Parent;