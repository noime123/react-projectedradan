import React, { useState } from 'react';
import './App.css';  // Import the CSS file for styling

function App() {
 
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  
  const handleCalculation = (operator) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setResult('Please enter valid numbers');
      return;
    }

    let calcResult;
    switch (operator) {
      case '+':
        calcResult = n1 + n2;
        break;
      case '-':
        calcResult = n1 - n2;
        break;
      case '*':
        calcResult = n1 * n2;
        break;
      case '/':
        if (n2 === 0) {
          calcResult = 'Cannot divide by zero';
        } else {
          calcResult = n1 / n2;
        }
        break;
      default:
        calcResult = 'Invalid operator';
    }
    setResult(calcResult);
  };

  return (
    <div className="calculator-container">
      <h2>Basic Calculator</h2>
      <div className="input-container">
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Enter first number"
          className="input-field"
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Enter second number"
          className="input-field"
        />
      </div>
      <div className="button-container">
        <button onClick={() => handleCalculation('+')} className="button">+</button>
        <button onClick={() => handleCalculation('-')} className="button">-</button>
        <button onClick={() => handleCalculation('*')} className="button">*</button>
        <button onClick={() => handleCalculation('/')} className="button">/</button>
      </div>
      <div className="result">
        {result !== null && <h3>Result: {result}</h3>}
      </div>
    </div>
  );
}

export default App;
