/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import './app.css';

class App extends React.Component {
  render() {
    return (
      <div className="appWrapper">
        <Header />
        <Outlet />
      </div>
    );
  }
}

export default App;
