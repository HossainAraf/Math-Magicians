// import React from 'react';
import React, { useState } from 'react';
import '../styles/calculator.css';
import Button from './Button';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleButtonClick = (buttonName) => {
    const newData = calculate(calculatorData, buttonName);
    setCalculatorData(newData);
    setDisplay(newData.next || '0');
  };

  return (
    <div className="calculator-wrapper">
      <div className="calculator">
        <div className="display">0</div>
        <div className="operator">
          <Button label="AC" />
          <Button label="+/-" />
          <Button label="%" />
          <Button className="operator-right-column" label="÷" />
          <Button label="7" />
          <Button label="8" />
          <Button label="9" />
          <Button className="operator-right-column" label="x" />
          <Button label="4" />
          <Button label="5" />
          <Button label="6" />
          <Button className="operator-right-column" label="-" />
          <Button label="1" />
          <Button label="2" />
          <Button label="3" />
          <Button className="operator-right-column" label="+" />
          <Button className="zero-btn" label="0" />
          <Button label="." />
          <Button className="operator-right-column" label="=" />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
