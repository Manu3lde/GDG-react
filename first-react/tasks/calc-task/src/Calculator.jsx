import React, { useState } from 'react';
import './Calculator.css'

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);
  const [operation, setOperation] = useState('');

  const handleNumberClick = (value) => {
    if (!operation) {
      setNum1((prev) => (prev === '0' ? String(value) : prev + String(value)));
    } else {
      setNum2((prev) => (prev === '0' ? String(value) : prev + String(value)));
    }
  };

  const handleOperationClick = (op) => {
    if (num1 === '') return;
    if (operation && num2 !== '') {
      const intermediate = computeResult();
      if (intermediate !== null) {
        setNum1(String(intermediate));
        setResult(intermediate);
        setNum2('');
      }
      setOperation(op);
      return;
    }

    setOperation(op);
  };

  const computeResult = () => {
    if (!operation || num1 === '' || num2 === '') return null;
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    let resultValue = 0;
    switch (operation) {
      case '+':
        resultValue = a + b;
        break;
      case '-':
        resultValue = a - b;
        break;
      case '*':
        resultValue = a * b;
        break;
      case '/':
        if (b === 0) {
          alert('Cannot divide by zero');
          return null;
        }
        resultValue = a / b;
        break;
      default:
        return null;
    }
    return resultValue;
  };

  const handleEqualClick = () => {
    const res = computeResult();
    if (res === null) return;
    setResult(res);
    setNum1(String(res));
    setNum2('');
    setOperation('');
  };

  const handleClear = () => {
    setNum1('');
    setNum2('');
    setOperation('');
    setResult(null);
  };

  return (
    <div className='container'>
        <h1>Calculator</h1>
      <div className="display"><p>&thinsp;{num1}  {operation || ''}  {num2}</p></div>
      <div className='line'></div>
      <div className="keypad">
        {[7, 8, 9, 4, 5, 6, 1, 2, 3, 0].map((item) => (
          <button key={item} onClick={() => handleNumberClick(item)}>{item}</button>
        ))}
        <div className="operations">
                {['/', '*', '+', '-'].map((item) => (
                  <button key={item} onClick={() => handleOperationClick(item)}>{item}</button>
                ))}
                <button onClick={handleEqualClick}>=</button>
                <button onClick={handleClear}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;