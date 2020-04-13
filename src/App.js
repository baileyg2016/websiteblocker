import React, { Component } from 'react';
import './App.css';
import kid from './kids_giving_finger_27.jpg';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>Get back to work! You are supposed to be changing the world.</h1>
        </div>
        <div style={{margin: "0", position: "absolute", left: "25%"}}>
          <img src={kid} alt={'get back to work'} />
        </div>
      </div>
    );
  }
}

export default App;
