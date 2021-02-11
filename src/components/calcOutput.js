import React, { Component } from "react";

class CalcOutput extends Component {
  render() {
    let { outcome } = this.props;
    return (
      <div className="result">
        <p>{outcome}</p>
      </div>
    );
  }
}

export default CalcOutput;
