import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import NationMedalStatus from './container/NationMedalStatus/NationMedalStatus';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Gracenote React Front-end test</h1>
        </header>
        <div className="top-buffer"></div>
        <NationMedalStatus />        
      </div>
    );
  }
}

export default App;
