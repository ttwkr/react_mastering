import React, { useState } from "react";

const EventPractice_func = () => {
  const [form, setForm] = useState({
    username: "",
    message: ""
  });

  const { username, message } = form; // 비구조할당 {키, 키} 위에서 (useState)설정한 키값이 들어간다
  const onChange = e => {
    const nextForm = {
      ...form, //기존의 form내용을 이자리에 복사한 뒤
      [e.target.name]: e.target.value // 원하는값을 덮어 씌운다
    };
    setForm(nextForm);
  };

  const onClick = () => {
    alert(username + ":" + message);
    setForm({
      username: "",
      message: ""
    });
  };

  const onKeyPress = e => {
    if (e.key === "Enter") {
      onClick();
    }
  };
  return (
    <div>
      <h1>이벤트 연습 - 함수형</h1>
      <input
        type="text"
        name="username"
        placeholder="input username"
        value={username}
        onChange={onChange}
      ></input>
      <input
        type="text"
        name="message"
        placeholder="input message"
        valeu={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      ></input>
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPractice_func;
