import './App.css'
import './Calculator'
import Calculator from './Calculator'
function App() {
  return (
    <>
      {/* <h1>Calculator</h1>
      <div className="display"><p>{operand1} {operator} {operand2}</p><p>{result}</p></div>
      <div className="calculator">
        <div className="other-operators">
          <button>!</button>
          <button>^</button>
        </div>
        <div className="numberpad">
          <button onClick={calculator}>=</button>
        </div>
        <div className="basic-operators">
          <button>+</button>
          <button>-</button>
          <button>*</button>
          <button>/</button>
        </div>
      </div> */}
      <Calculator/>
    </>
  )
}

export default App
