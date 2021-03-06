/* eslint-disable react/prefer-stateless-function */
/* eslint-disable  react/destructuring-assignment */
import React, { useState } from 'react';
import calculate from '../logics/calculate';
import Keypad from './Keypad';
import './Calculator.css';

const Calculator = () => {
  const [total, setTotal] = useState(0);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleClick = (buttonName) => {
    const result = calculate({ total, next, operation }, buttonName);
    setTotal(result.total);
    setNext(result.next);
    setOperation(result.operation);
  };

  return (
    <div className="calculator flex flexColumn">
      <div className="calculatorDisplay bgDark">
        <div className="calculatorDisplay-value">{(next == null) ? total : next}</div>
      </div>
      <div className="calculator-keypad bgGray flex flexColumn flex-justify-space-between">
        <Keypad keypads={['AC', '+/-', '%', '÷']} clickHandler={(buttonName) => handleClick(buttonName)} />
        <Keypad keypads={['7', '8', '9', 'x']} clickHandler={(buttonName) => handleClick(buttonName)} />
        <Keypad keypads={['4', '5', '6', '-']} clickHandler={(buttonName) => handleClick(buttonName)} />
        <Keypad keypads={['1', '2', '3', '+']} clickHandler={(buttonName) => handleClick(buttonName)} />
        <Keypad keypads={['0', '.', '=']} clickHandler={(buttonName) => handleClick(buttonName)} />
      </div>
    </div>
  );
};

export default Calculator;
