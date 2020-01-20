import React, { useState, useEffect } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  useEffect(() => {
    console.log("렌더링이 완료되었습니다.");
    console.log({
      name,
      nickname
    });
  });
  //   useEffect(() => {
  //     console.log("마운트 될때만 실행 됩니다.");
  //   }, []);

  return (
    <div>
      <h1>Hooks_Info</h1>
      이름 :{" "}
      <input
        type="text"
        value={name}
        onChange={e => {
          setName(e.target.value);
        }}
      ></input>
      닉네임 :{" "}
      <input
        type="text"
        value={nickname}
        onChange={e => {
          setNickname(e.target.value);
        }}
      ></input>
      <h3>
        <b>이름 : </b>
        {name}
      </h3>
      <h3>
        <b>닉네임 : </b>
        {nickname}
      </h3>
    </div>
  );
};

export default Info;
