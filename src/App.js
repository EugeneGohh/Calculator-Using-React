import "./components/style.css";
import Cancel from "./components/Assignmen Operator Icons/CancelIcon";
import Add from "./components/Assignmen Operator Icons/AddIcon";
import Minus from "./components/Assignmen Operator Icons/MinusIcon";

function App() {
  return (
    <div className="calculator-body">
      <div className="result-here">
        <p></p>
      </div>

      <div className="grid-container">
        <button className="grid-item">C</button>
        <button className="grid-item">÷</button>
        <button className="grid-item">×</button>
        <button className="grid-item">
          <Cancel />
        </button>
        <br></br>
        <button className="grid-item">7</button>
        <button className="grid-item">8</button>
        <button className="grid-item">9</button>
        <button className="grid-item">
          <Add />
        </button>
        <br></br>
        <button className="grid-item">4</button>
        <button className="grid-item">5</button>
        <button className="grid-item">6</button>
        <button className="grid-item">
          <Minus />
        </button>
        <br></br>
        <button iclassName="grid-item">1</button>
        <button className="grid-item">2</button>
        <button className="grid-item">3</button>

        <br></br>
        <button className="grid-item">%</button>
        <button className="grid-item">0</button>
        <button className="grid-item">.</button>
        <button className="grid-item">=</button>
      </div>
    </div>
  );
}

export default App;
