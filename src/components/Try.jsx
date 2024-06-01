import React, { useState } from "react";
function Try() {
    const [count, setCount] = useState(0);
    const handleUp = () => {
        setCount(count + 1);
    }
    const handleDown = () => {
        setCount(count - 1);
    }

    return (
        <div>
            <h1> the count is :{count}</h1>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button value={count} onClick={handleUp}>up</button>
                <button value={count} onClick={handleDown}>down</button>
            </div>

        </div>
    )
}
export default Try;