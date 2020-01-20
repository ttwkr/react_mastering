import React, { useState } from "react";

const Count_hooks = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Hooks 연습</h1>
      <p>
        현재 카운터값은 <b>{count}</b>입니다.
      </p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -1
      </button>
    </div>
  );
};

export default Count_hooks;
