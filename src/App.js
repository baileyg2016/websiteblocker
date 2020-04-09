import React, { Component } from 'react';
import './App.css';
import CountDown from './CountDown';

class App extends Component {

  render() {
    return (
      <div style={{margin: "auto"}}>
        <div>
          <CountDown />
        </div>
      </div>
    );
  }
}

export default App;
