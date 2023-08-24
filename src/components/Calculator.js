// Import the necessary modules and components.
import React, { useState } from 'react';
import '../styles/calculator.css';
import Button from './Button';
import calculate from '../logic/calculate';

const Calculator = () => {
  // Component State:
  // const setDisplay = useState('0');
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });
  // Button Click Handling:
  const handleButtonClick = (buttonName) => {
    const newData = calculate(calculatorData, buttonName);
    setCalculatorData(newData);
    // setDisplay(newData.next || '0');
  };

  return (
    <div className="calculator-wrapper">
      <div className="calculator">
        <div className="display">
          {calculatorData.next && <div className="next">{calculatorData.next}</div>}
          {calculatorData.total && <div className="total">{calculatorData.total}</div>}
          {!calculatorData.next && !calculatorData.total && '0'}
        </div>
        <div className="operator">
          <Button label="AC" onClick={() => handleButtonClick('AC')} />
          <Button label="+/-" onClick={() => handleButtonClick('+/-')} />
          <Button label="%" onClick={() => handleButtonClick('%')} />
          <Button className="operator-right-column" label="÷" onClick={() => handleButtonClick('÷')} />
          <Button label="7" onClick={() => handleButtonClick('7')} />
          <Button label="8" onClick={() => handleButtonClick('8')} />
          <Button label="9" onClick={() => handleButtonClick('9')} />
          <Button className="operator-right-column" label="x" onClick={() => handleButtonClick('x')} />
          <Button label="4" onClick={() => handleButtonClick('4')} />
          <Button label="5" onClick={() => handleButtonClick('5')} />
          <Button label="6" onClick={() => handleButtonClick('6')} />
          <Button className="operator-right-column" label="-" onClick={() => handleButtonClick('-')} />
          <Button label="1" onClick={() => handleButtonClick('1')} />
          <Button label="2" onClick={() => handleButtonClick('2')} />
          <Button label="3" onClick={() => handleButtonClick('3')} />
          <Button className="operator-right-column" label="+" onClick={() => handleButtonClick('+')} />
          <Button className="zero-btn" label="0" onClick={() => handleButtonClick('0')} />
          <Button label="." onClick={() => handleButtonClick('.')} />
          <Button className="operator-right-column" label="=" onClick={() => handleButtonClick('=')} />

        </div>
      </div>
    </div>
  );
};

export default Calculator;
