import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count {count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(0)}>reset</button>

      <button
        onClick={() => {
          setCount((c) => c + 2);
        }}
      >
        +2
      </button>
    </div>
  );
}

export default Counter;
