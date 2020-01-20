import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      return state;
  }
}

const CountReducer = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });
  //첫번째 파라미터에는 reducer함수를 넣고 두번째는 reducer의 기본값을 넣는다.

  const onClick = type => {
    dispatch({ type: type });
    //액션을 발생시키는 함수 기본형태는 dispatch(action)
  };

  return (
    <div>
      <h1>Hooks Reducer</h1>
      <p>
        현재 카운터값은 <b>{state.value}</b>입니다.
      </p>
      <button
        onClick={() => {
          onClick("INCREMENT");
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          onClick("DECREMENT");
        }}
      >
        -1
      </button>
    </div>
  );
};

export default CountReducer;
