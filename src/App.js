import React, { Component } from 'react';
import {
  BrowserRouter as Router, 
  Route, 
  Link
} from 'react-dom-router'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navbar">
          <a href="/login">Sign In</a>
        </div>
      </div>
    );
  }
}

export default App;
