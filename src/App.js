import React from "react";
import MyComponent from "./practice/props";
import Count from "./practice/state";
import Say from "./practice/useState";
import EventPractice from "./practice/eventPractice";
import EventPractice_func from "./practice/func_eventPractice";
import Iteration from "./practice/iteration";
import "./App.css";

function App() {
  return (
    <div className="App">
      <MyComponent name="상진"></MyComponent>
      <Count></Count>
      <Say></Say>
      <EventPractice></EventPractice>
      <EventPractice_func></EventPractice_func>
      <Iteration></Iteration>
    </div>
  );
}

export default App;
