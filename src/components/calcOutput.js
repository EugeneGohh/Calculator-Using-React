import React, { Component } from "react";

class CalcOutput extends Component {
  render() {
    let { answer } = this.props;

    return (
      <div className="result">
        <p>{answer}</p>
      </div>
    );
  }
}

export default CalcOutput;
