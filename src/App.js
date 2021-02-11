import React, { Component } from "react";
import "./components/style.css";
import CalcOutput from "./components/calcOutput";
import CalcButton from "./components/calcButton";

export class App extends Component {
  constructor() {
    super();

    /* Result is a dynamic information thus we'll use (this.state) */
    this.state = {
      outcome: "",
    };
  }

  onClick = (button) => {
    /* Condition */

    if (button === "=") {
      this.calculate();
    } else if (button === "C") {
      this.reset();
    } else if (button === ".CE") {
      this.backspace();
    } else {
      this.setState({
        outcome: this.state.outcome + button,
      });
    }
  };

  /* Calculate */
  calculate = () => {
    try {
      this.setState({
        /* Evaluates JavaScript code represented as a string */
        outcome: (eval(this.state.outcome) || "") + "",
      });
    } catch (e) {
      this.setState({
        outcome: "Syntax Error/Undefined",
      });
    }
  };

  /* Reset */
  reset = () => {
    this.setState({
      outcome: "",
    });
  };

  /* Backspace */
  backspace = () => {
    this.setState({
      /*  Returns the selected elements in an array, as a new array object */
      outcome: this.state.outcome.slice(0, -1),
    });
  };

  render() {
    return (
      <div>
        <div className="calculator-body">
          <CalcOutput outcome={this.state.outcome} />
          <CalcButton onClick={this.onClick} />
        </div>
      </div>
    );
  }
}

export default App;
