import React, { Component } from "react";

class CalcOutput extends Component {
  render() {
    const { outcome } = this.props;
    return (
      <div className="result">
        <p>{outcome}</p>
      </div>
    );
  }
}

export default CalcOutput;
