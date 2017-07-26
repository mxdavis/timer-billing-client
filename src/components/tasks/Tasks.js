import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import { tasks } from '../../redux/actions/tasks/tasks'
import apiRequest from '../../redux/modules/apiRequests'
import Task from './Task'

require('isomorphic-fetch');

class Tasks extends Component {

  getTasks = (tasks_type) => {
    apiRequest.get(`${tasks_type}_tasks`)
      .then(tasks => this.props.tasks(tasks, tasks_type))
      .then(tasks => this.showTasks(tasks))
  }
    
  showTasks = (tasks) => {
    tasks.map(task => <Task props={task} />)
  }

  componentDidMount() {
    this.getTasks('unbilled')
    this.getTasks('billed')
  }

 
  render() {
    return (
      <div>
        <h1 class="uk-heading-primary">Welcome User</h1>
        <h1 class="uk-heading-line uk-text-center"><span>Here are your tasks waiting to be billed:</span></h1>
        
        {/*{this.showTasks(this.state.tasks.unbilled_tasks)}*/}
        <h1 class="uk-heading-line uk-text-center"><span>Here are your tasks that were already billed:</span></h1>
        {/*{this.showTasks(this.state.tasks.billed_tasks)}*/}
      </div>
    )
  }
}

// will i need this to pass into task container?
// const mapStateToProps = state => {
//   return { 
//     tasks: {
//       billed_tasks: state.billed_tasks,
//       unbilled_tasks: state.unbilled_tasks
//     }
//   }
// }

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { tasks }, dispatch);
};

export default connect(null, mapDispatchToProps)(Tasks);