import React from 'react';
import '../styles/calculator.css';
import Button from './Button';

const Calculator = () => (
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

export default Calculator;
