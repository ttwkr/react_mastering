import React, { Component } from "react";

class EventPractice extends Component {
  state = {
    message: "",
    username: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
      // 객체안에서 key를 []로 감싸면 그 안에 넣은 레퍼런스가 가리키는 실제값이 key 값으로 사용
      //[e.target.name] 각 .input 태그에 있는 name 가 저 안으로 들어가서 키값이 된다.
    });
    console.log(this.state);
  };

  handleClick = e => {
    alert(this.state.message + ":" + this.state.username);
    this.setState({
      message: "",
      username: ""
    });
  };

  handleKeyPress = e => {
    if (e.key === "Enter") {
      this.handleClick();
    }
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="username"
          placeholder="사용자명"
          value={this.state.username}
          onChange={this.handleChange}
        ></input>
        <input
          type="text"
          name="message"
          placeholder="input string"
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        ></input>
        <br></br>
        <input type="text" value={this.state.username} readOnly></input>
        <input type="text" value={this.state.message} readOnly></input>
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;
