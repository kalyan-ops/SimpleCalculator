import React, { useState } from 'react';
import './Calculator.css';  // You'll need to create this CSS file

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === 'C') {
      setInput('');
      setResult('');
    } else if (value === '=') {
      try {
        if (input === '') {
          setResult('Error');
          return;
        }
        let expression = input.replace(/x/g, '*');
        let evaluatedResult = eval(expression);
        
        if (evaluatedResult === Infinity || evaluatedResult === -Infinity) {
          setResult('Infinity');
        } else if (isNaN(evaluatedResult)) {
          setResult('NaN');
        } else {
          setResult(evaluatedResult.toString());
        }
      } catch (error) {
        setResult('Error');
      }
    } else {
      setInput(prev => prev + value);
    }
  };

  return (
    <div className="calculator">
      <div className="calculator-display">
        <input
          type="text"
          value={input}
          readOnly
          className="input-display"
        />
      </div>
      
      <div className="result">
        {result}
      </div>

      <div className="calculator-buttons">
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('/')}>/</button>

        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('*')}>*</button>

        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('-')}>-</button>

        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('C')}>C</button>
        <button onClick={() => handleClick('=')}>=</button>
        <button onClick={() => handleClick('+')}>+</button>
      </div>
    </div>
  );
};

export default Calculator;