import React, { Component } from 'react';
import {
  BrowserRouter as Router, 
  Route, 
  Switch,
  NavLink
} from 'react-router-dom'

import '../styles/navbar.css';
import Tasks from '../components/tasks/Tasks'
import AddTask from '../components/tasks/AddTask'


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
                <li><NavLink to="/tasks/new">Add Task</NavLink></li>
                <li><NavLink to="/tasks">View Tasks</NavLink></li>
              </ul>
            </div>
          </nav>  
          <Switch>
            <Route exact path = "/" />
              <Route path = "/tasks/new" component={AddTask}/>
            <Route path = "/tasks" component={Tasks}/>

            <Route  />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
