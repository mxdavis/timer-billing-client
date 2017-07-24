import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import '../styles/navbar.css';


class Navbar extends Component {
  render() {
    return (
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
      </div>
    )
  }
}

export default Navbar;
