import React from 'react';
import './quotes-page.css';

const QuotesPage = () => (
  <>
    <main>
      <section>
        <div className="container flex">
          <div className="quotes flex flexAlignCenter">
            <p className="quotesPar">
              As far as the laws of mathematics refer to reality, they are not certain,
              and as far as they are certain, they do not refer to reality.
              <i>— Albert Einstein</i>
            </p>
          </div>
        </div>
      </section>
    </main>
  </>
);

export default QuotesPage;
