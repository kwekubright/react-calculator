import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => (
  <header className="container header flex flexJustifySpaceBetween flexAlignCenter">
    <div className="header-logo">
      <Link to="/">
        <h1 className="logo">Math Magicians</h1>
      </Link>
    </div>
    <div className="header-nav flex">
      <Link to="/" className="headerNavLink">
        {' '}
        {'Home | '}
      </Link>
      <Link to="/calculator" className="headerNavLink">
        {' Calculator | '}
      </Link>
      <Link to="/quotes" className="headerNavLink">
        {' Quote'}
      </Link>
    </div>
  </header>
);

export default Header;
