/* eslint-disable  react/destructuring-assignment */
import React from 'react';
import Proptype from 'prop-types';

class Keypad extends React.Component {
  handleClick(buttonName) {
    this.props.clickHandler(buttonName);
  }

  render() {
    if (this.props.keypads.length === 4) {
      const [first, second, third, fourth] = this.props.keypads;

      return (
        <div className="calculator-keypad-row flex flex-justify-space-between">
          <button type="button" className="calculator-keypad-key" onClick={() => this.handleClick(first)} onKeyDown={() => this.handleClick(first)}>{first}</button>
          <button type="button" className="calculator-keypad-key" onClick={() => this.handleClick(second)} onKeyDown={() => this.handleClick(second)}>{second}</button>
          <button type="button" className="calculator-keypad-key" onClick={() => this.handleClick(third)} onKeyDown={() => this.handleClick(third)}>{third}</button>
          <button type="button" className="calculator-keypad-key bg-orange" onClick={() => this.handleClick(fourth)} onKeyDown={() => this.handleClick(fourth)}>{fourth}</button>
        </div>
      );
    }
    const [first, second, third] = this.props.keypads;
    return (
      <div className="calculator-keypad-row flex flex-justify-space-between">
        <button type="button" className="calculator-keypad-key flex-more" onClick={() => this.handleClick(first)} onKeyDown={() => this.handleClick(first)}>{first}</button>
        <button type="button" className="calculator-keypad-key flex-less" onClick={() => this.handleClick(second)} onKeyDown={() => this.handleClick(second)}>{second}</button>
        <button type="button" className="calculator-keypad-key bg-orange flex-less" onClick={() => this.handleClick(third)} onKeyDown={() => this.handleClick(third)}>{third}</button>
      </div>
    );
  }
}

Keypad.propTypes = {
  keypads: Proptype.arrayOf(Proptype.string).isRequired,
  clickHandler: Proptype.func.isRequired,
};

export default Keypad;
