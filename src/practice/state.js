import React, { Component } from "react";

class Count extends Component {
  state = {
    number: 0,
    fixednumber: 0
  };
  render() {
    const { number, fixednumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는값 : {fixednumber}</h2>
        <button
          onClick={() => {
            this.setState(
              {
                number: this.state.number + 1
              },
              () => {
                console.log("방금 setState가 호출");
                console.log(this.state);
              }
            );
            //setState를 통해 state 값 변경
          }}
        >
          {" "}
          +1{" "}
        </button>
      </div>
    );
  }
}

export default Count;
