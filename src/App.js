import React, { Component } from "react";
import "./components/style.css";
import CalcOutput from "./components/calcOutput";
import CalcButton from "./components/calcButton";
import { evaluate } from "mathjs";

export class App extends Component {
  constructor() {
    super();

    /* Result is a dynamic information thus we'll use (this.state) */
    this.state = {
      outcome: "",
    };
  }

  onClick = (button) => {
    // For condition check

    if (button === "=") {
      this.calculate();
    } else if (button === "C") {
      this.reset();
    } else if (button === "CE") {
      this.backspace();
    } else {
      this.setState({
        outcome: this.state.outcome + button,
      });
    }
  };

  // Calculate logic
  calculate = () => {
    try {
      this.setState({
        /* Evaluates JavaScript code represented as a string */
        outcome: (evaluate(this.state.outcome) || "") + "",
      });
    } catch (e) {
      this.setState({
        outcome: "Syntax Error/Undefined",
      });
    }
  };

  // Reset logic
  reset = () => {
    this.setState({
      outcome: "",
    });
  };

  // Backspace's logic
  backspace = () => {
    this.setState({
      // If user press backspace it'll clear the value and updates it.
      outcome: " ",
    });
  };

  render() {
    return (
      <div>
        <div className="heading">
          <h1>Eugene's Calculator</h1>
        </div>
        <div className="calculator-body">
          <CalcOutput outcome={this.state.outcome} />
          <CalcButton onClick={this.onClick} />
        </div>
      </div>
    );
  }
}

export default App;
