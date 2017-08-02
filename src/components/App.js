import React, { Component } from 'react';
import {
  BrowserRouter as Router, 
  Route, 
  Switch,
  Redirect,
  NavLink
} from 'react-router-dom'

import '../styles/navbar.css'
import Tasks from './tasks/Tasks'
import AddTask from './tasks/AddTask'
import AddClient from './clients/AddClient'
import Clients from './clients/Clients'
import AddProject from './projects/AddProject'
import Home from './Home'
import Navbar from './Navbar'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path = "/" component={Home}/>
            <Route path = "/tasks/new" component={AddTask}/>
            <Route path = "/tasks" component={Tasks}/>
            <Route path = "/clients/" component={Clients}>
              <Route path = "/clients/new" component={AddClient}/>
              <Route path = "clients/projects/new" component={AddProject}/>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
