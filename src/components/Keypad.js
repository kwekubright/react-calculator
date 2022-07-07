/* eslint-disable  react/destructuring-assignment */
import React from 'react';
import Proptype from 'prop-types';

function Keypad({ keypads, clickHandler }) {
  const handleClick = (buttonName) => {
    clickHandler(buttonName);
  };

  if (keypads.length === 4) {
    const [first, second, third, fourth] = keypads;

    return (
      <div className="calculatorKeypadRow flex flex-justify-space-between">
        <button type="button" className="calculatorKeypadKey" onClick={() => handleClick(first)} onKeyDown={() => handleClick(first)}>{first}</button>
        <button type="button" className="calculatorKeypadKey" onClick={() => handleClick(second)} onKeyDown={() => handleClick(second)}>{second}</button>
        <button type="button" className="calculatorKeypadKey" onClick={() => handleClick(third)} onKeyDown={() => handleClick(third)}>{third}</button>
        <button type="button" className="calculatorKeypadKey bgOrange" onClick={() => handleClick(fourth)} onKeyDown={() => handleClick(fourth)}>{fourth}</button>
      </div>
    );
  }
  const [first, second, third] = keypads;
  return (
    <div className="calculatorKeypadRow flex flex-justify-space-between">
      <button type="button" className="calculatorKeypadKey flexMore" onClick={() => handleClick(first)} onKeyDown={() => handleClick(first)}>{first}</button>
      <button type="button" className="calculatorKeypadKey flexLess" onClick={() => handleClick(second)} onKeyDown={() => handleClick(second)}>{second}</button>
      <button type="button" className="calculatorKeypadKey bgOrange flexLess" onClick={() => handleClick(third)} onKeyDown={() => handleClick(third)}>{third}</button>
    </div>
  );
}

Keypad.propTypes = {
  keypads: Proptype.arrayOf(Proptype.string).isRequired,
  clickHandler: Proptype.func.isRequired,
};

export default Keypad;
