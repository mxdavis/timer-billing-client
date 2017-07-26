import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import { updateTasks } from '../../redux/actions/tasks/updateTasks'
import apiRequest from '../../redux/modules/apiRequests'

require('isomorphic-fetch');

class Tasks extends Component {

  componentDidMount() {
    apiRequest.get('unbilled_tasks')
    .then(tasks => updateTasks(tasks, 'unbilled'))
    .then(tasks => console.log(tasks))
  }
 
  render() {
    return (
      <div>Here are my tasks</div>
    )
  }
}

const mapStateToProps = state => {
  return { 
    updateTasks: state.updateTasks
  }
}

debugger

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { 
    updateTasks
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);