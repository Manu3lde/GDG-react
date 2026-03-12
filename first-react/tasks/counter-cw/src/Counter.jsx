import React, { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const reset = () => setCount(0);
  const decrement = () => setCount(count - 1);
  return (
    <div>
      <p>Count is {count}</p>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={reset}>Reset</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
}

export default Counter;
