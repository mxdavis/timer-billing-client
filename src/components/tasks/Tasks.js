import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import { updateTasks } from '../../redux/actions/tasks/tasks'
import apiRequest from '../../redux/modules/apiRequests'

require('isomorphic-fetch');

class Tasks extends Component {

  constructor(props){
    super(props)
    this.state = {
      unbilled_tasks: [],
      billed_tasks: []
    }
  }
  componentDidMount() {
    apiRequest.get('unbilled_tasks')
    .then(tasks => updateTasks(tasks, 'unbilled'))
  }
 
  render() {
    return (
      <div>Here are my tasks</div>
    )
  }
}

const mapStateToProps = state => {
  return { 
    unbilled_tasks: state.unbilled_tasks,
    billed_tasks: state.billed_tasks
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { 
    updateTasks
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);