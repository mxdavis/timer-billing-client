import React, { Component } from 'react';
import {
  BrowserRouter as Router, 
  Route, 
  Switch,
  Link
} from 'react-router-dom'
import './styles/navbar.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav className="uk-navbar">
            <div className="uk-navbar-flip">
              <ul className="uk-navbar-nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/signin">Sign In</Link></li>
                <li><Link to="/">Add Task</Link></li>
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
