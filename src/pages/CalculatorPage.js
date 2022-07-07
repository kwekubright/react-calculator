import React from 'react';
import Calculator from '../components/Calculator';
import './calculator-page.css';

const mathImage = require('../assets/images/math.webp');

function CalculatorPage() {
  return (
    <main>
      <section>
        <div className="container sectionWrapper flex flexJustifySpaceBetween">
          <div className="intro">
            <h1>Let&apos;s have fun with maths</h1>
            <img src={mathImage} alt="math" />
          </div>
          <div className="calculatorWrapper">
            <Calculator />
          </div>
        </div>
      </section>
    </main>
  );
}

export default CalculatorPage;
