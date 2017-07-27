import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import { tasks } from '../../redux/actions/tasks/tasks'
import apiRequest from '../../redux/modules/apiRequests'
import {startFetchingData, stopFetchingData} from '../../redux/actions/fetchingData'
import Task from './Task'

require('isomorphic-fetch');

class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      fetching: ["unbilled", "billed"], 
      tasks: {
        billed_tasks: this.state.billed_tasks,
        unbilled_tasks: this.state.unbilled_tasks
    } };
  }

  getTasks = (tasks_type) => {
    const task_type_to_cap = `${tasks_type}_tasks`.toUpperCase()
    apiRequest.get(`${tasks_type}_tasks`)
      .then(tasks => this.props.tasks(tasks, tasks_type))
      .then(this.setState({
        fetching: this.state.fetching.filter((i) => i !== tasks_type)
      }))
      .then(this.showTasks(tasks_type))
  }
    
  showTasks = (tasks, state) => {
    debugger
    if (this.tasks){
      return <div> I have loaded</div>
    }
   
      
    // return state ? <div>I have state</div> : <div> state is undefined</div>
    // this.state[tasks].map(task => <Task props={task} />) 
  }

  componentDidMount() {
    this.getTasks('unbilled')
    this.getTasks('billed')
  }

 
  render() {
    return (
      <div>
        <h1 className="uk-heading-primary">Welcome User</h1>
        <h1 className="uk-heading-line uk-text-center"><span>Here are your tasks waiting to be billed:</span></h1>
        {(this.state.fetching.length > 0 && this.state.fetching.indexOf("billed") > -1) ? <div className="uk-spinner">I am loading</div> : this.showTasks("unbilled", this.state)}
        <h1 className="uk-heading-line uk-text-center"><span>Here are your tasks that were already billed:</span></h1>
        {(this.state.fetching.length > 0 && this.state.fetching.indexOf("billed") > -1) ? <div className="uk-spinner">I am loading</div> : this.showTasks("billed", this.state)}
      </div>
    )
  }
}

// will i need this to pass into task container?
const mapStateToProps = state => {
  return { 
    tasks: state.tasks
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { tasks, startFetchingData, stopFetchingData }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);