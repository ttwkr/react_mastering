import React from "react";

//props 는 컴포넌트의 속성을 나타낸다
const MyComponent = ({ name }) => {
  // 이 위에도{name} 비구조할당
  //   const { name } = props; // 비구조 할당
  return <div> HI! My name is {name}</div>;
};

export default MyComponent;
