import React, { Component } from 'react';
import logo from './logo.svg';
import Reset from './Reset';
import Debt from './Debt';
import Tension from './Tension';
import KillSwitch from './KillSwitch';
import Cards from './Cards';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Reset />
          <div className="stats">
            <Debt />
            <Tension />
            <KillSwitch />
          </div>
          <div className="reset"></div>
        </header>
        <div className="App-intro">
          <Cards />
        </div>
      </div>
    );
  }
}

export default App;
