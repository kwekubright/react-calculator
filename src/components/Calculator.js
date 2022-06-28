/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './Calculator.css';

class Calculator extends React.Component {
  render() {
    return (
      <div className="calculator flex flex-column">
        <div className="calculator-display bg-dark">
          <div className="calculator-display-value">0</div>
        </div>
        <div className="calculator-keypad bg-gray flex flex-column flex-justify-space-between">
          <div className="calculator-keypad-row flex flex-justify-space-between">
            <div className="calculator-keypad-key">AC</div>
            <div className="calculator-keypad-key">+/-</div>
            <div className="calculator-keypad-key">%</div>
            <div className="calculator-keypad-key bg-orange">÷</div>
          </div>
          <div className="calculator-keypad-row flex flex-justify-space-between">
            <div className="calculator-keypad-key">7</div>
            <div className="calculator-keypad-key">8</div>
            <div className="calculator-keypad-key">9</div>
            <div className="calculator-keypad-key bg-orange">x</div>
          </div>
          <div className="calculator-keypad-row flex flex-justify-space-between">
            <div className="calculator-keypad-key">4</div>
            <div className="calculator-keypad-key">5</div>
            <div className="calculator-keypad-key">6</div>
            <div className="calculator-keypad-key bg-orange">-</div>
          </div>
          <div className="calculator-keypad-row flex flex-justify-space-between">
            <div className="calculator-keypad-key">1</div>
            <div className="calculator-keypad-key">2</div>
            <div className="calculator-keypad-key">3</div>
            <div className="calculator-keypad-key bg-orange">+</div>
          </div>
          <div className="calculator-keypad-row flex flex-justify-space-between">
            <div className="calculator-keypad-key flex-more">0</div>
            <div className="calculator-keypad-key flex-less">.</div>
            <div className="calculator-keypad-key bg-orange flex-less">=</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
