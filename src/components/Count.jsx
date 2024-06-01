import React, { useEffect, useState } from "react";

function Count() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `Count: ${count}`; // Update document title with current count
        return () => {
            // Remove event listener
            console.log("cleaned");
        };
   
    }, [count]);
    return (
        <div>
            <h1>The count is: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );
}

export default Count;
