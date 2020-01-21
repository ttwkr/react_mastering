import React, { useState, useMemo } from "react";

const getAverage = numberlist => {
  console.log("...평균구하는 중");

  if (numberlist.length === 0) {
    return 0;
  }

  const sum = numberlist.reduce((acc, curr) => {
    return acc + curr.number;
  }, 0);
  return sum / numberlist.length;
};

const Average = () => {
  //   const [list, setList] = useState([]);
  const [numbers, setNumbers] = useState([]);
  const [number, setNumber] = useState("");
  const [id, setId] = useState(1);

  //   const List = () => {
  //     list.map((curr, i) => <li key={i}>{curr}</li>);
  //   };

  const onChange = e => {
    setNumber(parseInt(e.target.value));
  };

  const onKeyPress = e => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  const onClick = e => {
    setNumbers(
      numbers.concat({
        id: id,
        number: number
      })
    );
    setId(id + 1);
    setNumber("");
  };

  const onRemove = id => {
    const numberFilter = numbers.filter(curr => curr.id !== id);
    setNumbers(numberFilter);
  };

  const avg = useMemo(() => {
    return getAverage(numbers);
  }, [numbers]);

  return (
    <div>
      <h1>평균값 구하기 useMemo</h1>
      <input
        type="text"
        value={number}
        onChange={onChange}
        onKeyPress={onKeyPress}
      ></input>
      <button onClick={onClick}>추가</button>
      <ul>
        {numbers.map((curr, i) => (
          <li
            key={i}
            onDoubleClick={() => {
              onRemove(curr.id);
            }}
          >
            {curr.number}
          </li>
        ))}
      </ul>
      <div>
        <b>평균값 : </b> {avg}
      </div>
    </div>
  );
};

export default Average;
