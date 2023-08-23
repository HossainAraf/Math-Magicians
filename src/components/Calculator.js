import React from 'react';
import '../styles/calculator.css';

const Calculator = () => (
  <div className="calculator-wrapper">
    <div className="calculator">
      <div className="display">0</div>
      <div className="operator">
        <button type="button">AC</button>
        <button type="button">+/-</button>
        <button type="button">%</button>
        <button className="operator-right-column" type="button">/</button>
        <button type="button">7</button>
        <button type="button">8</button>
        <button type="button">9</button>
        <button className="operator-right-column" type="button">x</button>
        <button type="button">4</button>
        <button type="button">5</button>
        <button type="button">6</button>
        <button className="operator-right-column" type="button">-</button>
        <button type="button">1</button>
        <button type="button">2</button>
        <button type="button">3</button>
        <button className="operator-right-column" type="button">+</button>
        <button className="zero-btn" type="button">0</button>
        <button type="button">.</button>
        <button className="operator-right-column" type="button">=</button>

      </div>
    </div>
  </div>
);

export default Calculator;
