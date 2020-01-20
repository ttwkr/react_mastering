import React from "react";
import MyComponent from "./practice/props";
import Count from "./practice/state";
import Say from "./practice/useState";
import EventPractice from "./practice/eventPractice";
import "./App.css";

function App() {
  return (
    <div className="App">
      <MyComponent name="상진"></MyComponent>
      <Count></Count>
      <Say></Say>
      <EventPractice></EventPractice>
    </div>
  );
}

export default App;
