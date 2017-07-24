import React, { Component } from 'react';
import {
  BrowserRouter as Router, 
  Route, 
  Switch,
  NavLink
} from 'react-router-dom'
import '../styles/navbar.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav className="uk-navbar">
            <div className="uk-navbar-flip">
              <ul className="uk-navbar-nav">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/signin">Sign In</NavLink></li>
                <li><NavLink to="/">Add Task</NavLink></li>
              </ul>
            </div>
          </nav>  
          <Switch>
            <Route exact path = "/" />
            {/*<Route exact path = "/signup" component={Signup}/>*/}
            <Route  />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
