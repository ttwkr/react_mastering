import React, { useState } from "react";
import MyComponent from "./practice/props";
import Count from "./practice/state";
import Say from "./practice/useState";
import EventPractice from "./practice/eventPractice";
import EventPracticeFunc from "./practice/func_eventPractice";
import Iteration from "./practice/iteration";
import CountHooks from "./practice/hooks";
import Info from "./practice/hooks_info";
import CountReducer from "./practice/hooks_useReducer";
import "./App.css";

const App = () => {
  const [visiable, setVisialbe] = useState(false);
  const onClick = () => {
    setVisialbe(!visiable);
  };
  return (
    <div className="App">
      <MyComponent name="상진"></MyComponent>
      <Count></Count>
      <Say></Say>
      <EventPractice></EventPractice>
      <EventPracticeFunc></EventPracticeFunc>
      <Iteration></Iteration>
      <CountHooks></CountHooks>
      <hr />
      <button onClick={onClick}>{visiable ? "숨기기" : "보이기"}</button>
      <hr />
      {visiable && <Info></Info>}
      <CountReducer></CountReducer>
    </div>
  );
};

export default App;
