/* eslint-disable react/prefer-stateless-function */
/* eslint-disable  react/destructuring-assignment */
import React from 'react';
import calculate from '../logics/calculate';
import Keypad from './Keypad';
import './Calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
      current: null,
    };
  }

  componentDidMount() {
    this.handleClick('AC');
  }

  handleClick(buttonName) {
    const { total, next, operation } = calculate(this.state, buttonName);
    this.setState({ total, next, operation });
  }

  render() {
    return (
      <div className="calculator flex flex-column">
        <div className="calculator-display bg-dark">
          <div className="calculator-display-value">{(this.state.next == null) ? this.state.total : this.state.next}</div>
        </div>
        <div className="calculator-keypad bg-gray flex flex-column flex-justify-space-between">
          <Keypad keypads={['AC', '+/-', '%', '÷']} clickHandler={(buttonName) => this.handleClick(buttonName)} />
          <Keypad keypads={['7', '8', '9', 'x']} clickHandler={(buttonName) => this.handleClick(buttonName)} />
          <Keypad keypads={['4', '5', '6', '-']} clickHandler={(buttonName) => this.handleClick(buttonName)} />
          <Keypad keypads={['1', '2', '3', '+']} clickHandler={(buttonName) => this.handleClick(buttonName)} />
          <Keypad keypads={['0', '.', '=']} clickHandler={(buttonName) => this.handleClick(buttonName)} />
        </div>
      </div>
    );
  }
}

export default Calculator;
