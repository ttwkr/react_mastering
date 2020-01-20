import React from "react";

const Iteration = () => {
  const names = ["눈사람", "얼음", "눈", "바람"];
  const nameList = names.map((name, index) => {
    return <li key={index}>{name}</li>;
  });
  return (
    <div>
      <h1>반복</h1>
      <ul>{nameList}</ul>
    </div>
  );
};

export default Iteration;
