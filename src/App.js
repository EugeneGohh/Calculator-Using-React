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
      answer: "",
    };
  }

  onClick = (button) => {
    // For condtion

    if (button === "=") {
      this.calculate();
    } else if (button === "C") {
      this.reset();
    } else if (button === "CE") {
      this.backspace();
    } else {
      this.setState({
        answer: this.state.answer + button,
      });
    }
  };

  // Calculate logic
  calculate = () => {
    try {
      this.setState({
        /* Evaluates JavaScript code represented as a string */
        answer: (evaluate(this.state.answer) || "") + "",
      });
    } catch (e) {
      this.setState({
        answer: "Syntax Error/Undefined",
      });
    }
  };

  // Reset logic
  reset = () => {
    this.setState({
      answer: "",
    });
  };

  // Backspace's logic
  backspace = () => {
    this.setState({
      // If user press backspace it'll clear the value and updates it.
      answer: " ",
    });
  };

  render() {
    return (
      <div>
        <div className="calculator-body">
          <CalcOutput outcome={this.state.answer} />
          <CalcButton onClick={this.onClick} />
        </div>
      </div>
    );
  }
}

export default App;
