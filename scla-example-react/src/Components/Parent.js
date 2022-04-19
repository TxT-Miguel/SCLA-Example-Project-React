import { useState } from 'react';

import Child from "./Child";

const Parent = () => {
    const [count, setCount] = useState(0);

    // add to counter
    const countHandler = () => {
        setCount(count + 1);
    }

    // remove to counter
    const removeCountHandler = () => {
        setCount(count - 1);
    }


    return (
        <div>
            <Child passingData="Increment | Decrement"/>

            <h1>{count}</h1>

            <button onClick={removeCountHandler}>-</button>
            <button onClick={countHandler}>+</button>
        </div>
    )
}

export default Parent;