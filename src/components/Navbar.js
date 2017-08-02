import React from 'react';
import { NavLink } from 'react-router-dom'
import '../styles/navbar.css';


const Navbar = () =>  {
  return (
    <div className="App">
      <nav className="uk-navbar fixed">
        <div className="uk-navbar-flip">
          <ul className="uk-navbar-nav">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/signin">Sign In</NavLink></li>
            <li><NavLink to="/tasks/new">Add Task</NavLink></li>
            <li><NavLink to="/clients">Clients</NavLink></li>
            <li><NavLink to="/tasks">Tasks</NavLink></li>
          </ul>
        </div>
      </nav>  
    </div>
  )
}


export default Navbar;
