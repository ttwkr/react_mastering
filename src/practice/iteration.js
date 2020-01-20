import React, { useState } from "react";

const Iteration = () => {
  const [names, setNames] = useState([
    {
      id: 1,
      text: "SnowMan"
    },
    {
      id: 2,
      text: "ice"
    },
    {
      id: 3,
      text: "snow"
    },
    {
      id: 4,
      text: "wind"
    }
  ]);
  const [nextId, setNextId] = useState(5);
  const [inputText, setInputText] = useState("");

  const onChange = e => {
    setInputText(e.target.value);
  };

  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText
    });
    setNames(nextNames);
    setNextId(nextId + 1);
    setInputText("");
  };

  const onRemove = id => {
    const nextName = names.filter(name => name.id !== id);
    setNames(nextName);
  };

  const nameList = names.map((name, index) => {
    return (
      <li
        key={index}
        onDoubleClick={() => {
          onRemove(name.id);
        }}
      >
        {name.text}
      </li>
    );
  });
  return (
    <div>
      <h1>반복</h1>
      <input value={inputText} onChange={onChange}></input>
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>
    </div>
  );
};

export default Iteration;
