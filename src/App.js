import "./components/style.css";

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
        <br></br>
        <button className="grid-item">5</button>
        <button className="grid-item">6</button>
        <button className="grid-item">7</button>
        <button className="grid-item">8</button>
        <br></br>
        <button className="grid-item">9</button>
        <button className="grid-item">10</button>
        <button className="grid-item">11</button>
        <button className="grid-item">12</button>
        <br></br>
        <button iclassName="grid-item">13</button>
        <button className="grid-item">14</button>
        <button className="grid-item">15</button>
        <button className="grid-item">16</button>
        <br></br>
        <button className="grid-item">17</button>
        <button className="grid-item">18</button>
        <button className="grid-item">19</button>
        <button class="grid-item">20</button>
      </div>
    </div>
  );
}

export default App;
