import React, { useState } from 'react';
import './App.css'; 

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  const decrement = () => setCount(count - 1);

  const reset = () => setCount(0);

  return (
    <div className="counter-container">
      <h1>Counter: {count}</h1>
      <div className="button-container">
        <button className="button increment" onClick={increment}>Increment</button>
        <button className="button decrement" onClick={decrement}>Decrement</button>
        <button className="button reset" onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
