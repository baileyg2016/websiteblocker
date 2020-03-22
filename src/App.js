import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1 className="App-title">{this.state.domain}</h1>
        You cannot be one this website for another ....
      </div>
    );
  }
}

export default App;
