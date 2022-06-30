/* eslint-disable  react/destructuring-assignment */
import React from 'react';
import Proptype from 'prop-types';

const Keypad = ({ keypads, clickHandler }) => {
  const handleClick = (buttonName) => {
    clickHandler(buttonName);
  };

  if (keypads.length === 4) {
    const [first, second, third, fourth] = keypads;

    return (
      <div className="calculator-keypad-row flex flex-justify-space-between">
        <button type="button" className="calculator-keypad-key" onClick={() => handleClick(first)} onKeyDown={() => handleClick(first)}>{first}</button>
        <button type="button" className="calculator-keypad-key" onClick={() => handleClick(second)} onKeyDown={() => handleClick(second)}>{second}</button>
        <button type="button" className="calculator-keypad-key" onClick={() => handleClick(third)} onKeyDown={() => handleClick(third)}>{third}</button>
        <button type="button" className="calculator-keypad-key bg-orange" onClick={() => handleClick(fourth)} onKeyDown={() => handleClick(fourth)}>{fourth}</button>
      </div>
    );
  }
  const [first, second, third] = keypads;
  return (
    <div className="calculator-keypad-row flex flex-justify-space-between">
      <button type="button" className="calculator-keypad-key flex-more" onClick={() => handleClick(first)} onKeyDown={() => handleClick(first)}>{first}</button>
      <button type="button" className="calculator-keypad-key flex-less" onClick={() => handleClick(second)} onKeyDown={() => handleClick(second)}>{second}</button>
      <button type="button" className="calculator-keypad-key bg-orange flex-less" onClick={() => handleClick(third)} onKeyDown={() => handleClick(third)}>{third}</button>
    </div>
  );
};

Keypad.propTypes = {
  keypads: Proptype.arrayOf(Proptype.string).isRequired,
  clickHandler: Proptype.func.isRequired,
};

export default Keypad;
