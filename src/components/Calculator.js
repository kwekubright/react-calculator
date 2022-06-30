/* eslint-disable react/prefer-stateless-function */
/* eslint-disable  react/destructuring-assignment */
import React, {useState} from 'react';
import calculate from '../logics/calculate';
import Keypad from './Keypad';
import './Calculator.css';


const Calculator = () => {
  let [total, setTotal] = useState(0);
  let [next, setNext] = useState(null);
  let [operation, setOperation] = useState(null);

  const handleClick = (buttonName) => { 
    const result = calculate({ total, next, operation }, buttonName);
    setTotal(result.total);
    setNext(result.next);
    setOperation(result.operation);
  }

  return (
    <div className="calculator flex flex-column">
      <div className="calculator-display bg-dark">
        <div className="calculator-display-value">{(next == null) ? total : next}</div>
      </div>
      <div className="calculator-keypad bg-gray flex flex-column flex-justify-space-between">
        <Keypad keypads={['AC', '+/-', '%', '÷']} clickHandler={(buttonName) => handleClick(buttonName)} />
        <Keypad keypads={['7', '8', '9', 'x']} clickHandler={(buttonName) => handleClick(buttonName)} />
        <Keypad keypads={['4', '5', '6', '-']} clickHandler={(buttonName) => handleClick(buttonName)} />
        <Keypad keypads={['1', '2', '3', '+']} clickHandler={(buttonName) => handleClick(buttonName)} />
        <Keypad keypads={['0', '.', '=']} clickHandler={(buttonName) => handleClick(buttonName)} />
      </div>
    </div>
  );

}

export default Calculator;