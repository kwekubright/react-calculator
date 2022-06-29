import React from "react";
import Proptype from "prop-types";

class Keypad extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(buttonName) {
    this.props.clickHandler(buttonName);
  }

  render() {
    if (this.props.keypads.length === 4) { 
      const [first, second, third, fourth] = this.props.keypads;
      
      return (
        <div className="calculator-keypad-row flex flex-justify-space-between">
          <div className="calculator-keypad-key" onClick={() => this.handleClick(first)}>{first}</div>
          <div className="calculator-keypad-key" onClick={() => this.handleClick(second)}>{second}</div>
          <div className="calculator-keypad-key" onClick={() => this.handleClick(third)}>{third}</div>
          <div className="calculator-keypad-key bg-orange" onClick={() => this.handleClick(fourth)}>{fourth}</div>
        </div>
      );
    } else {
      const [first, second, third] = this.props.keypads;
      return (
      <div className="calculator-keypad-row flex flex-justify-space-between">
          <div className="calculator-keypad-key flex-more" onClick={() => this.handleClick(first)}>{first}</div>
          <div className="calculator-keypad-key flex-less" onClick={() => this.handleClick(second)}>{second}</div>
          <div className="calculator-keypad-key bg-orange flex-less" onClick={() => this.handleClick(third)}>{third}</div>
      </div>
      )
    }
  }
}

Keypad.propTypes = {
  keypads: Proptype.arrayOf(Proptype.string).isRequired,
  clickHandler: Proptype.func.isRequired,
};

export default Keypad;