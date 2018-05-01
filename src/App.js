import React, { Component } from 'react';
import logo from './logo.svg';
import Reset from './Reset';
import Debt from './Debt';
import Tension from './Tension';
import KillSwitch from './KillSwitch';
import Cards from './Cards';
import Title from './Title';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {titleScreen:true};
  }

  onClick() {
    console.log('click');
    this.setState({ titleScreen:false });
  }

  render() {
    const toRender = this.state.titleScreen ? (
        <Title updateStuff={this.onClick} />
          ) : (
        <div className="App">
            <header className="App-header">
            <Reset />
            <div className="stats" style={{'justify-content':"center"}}>
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
        )

    return ( <div>{toRender}</div> );
  }
}

export default App;