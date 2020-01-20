import React, { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState(""); // usestate함수를 호출하면 배열이 반환된다. 파라미터에 있는 값이 message에 들어간다.
  const [color, setColor] = useState("black");
  const onClickEnter = () => setMessage("HI!!!!");
  const onClickLeave = () => setMessage("Bye!!!");

  return (
    <div>
      <button onClick={onClickEnter}>Enter</button>
      <button onClick={onClickLeave}>Leave</button>
      <h1 style={{ color }}>{message}</h1>
      <button
        style={{ color: "red" }}
        onClick={() => {
          setColor("red");
        }}
      >
        RED
      </button>
      <button
        style={{ color: "blue" }}
        onClick={() => {
          setColor("blue");
        }}
      >
        Blue
      </button>
      <button
        style={{ color: "green" }}
        onClick={() => {
          setColor("green");
        }}
      >
        Green
      </button>
    </div>
  );
};

export default Say;
