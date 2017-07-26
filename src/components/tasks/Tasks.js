import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import { tasks } from '../../redux/actions/tasks/tasks'
import apiRequest from '../../redux/modules/apiRequests'

require('isomorphic-fetch');

class Tasks extends Component {

  componentDidMount() {
    apiRequest.get('unbilled_tasks')
    .then(tasks => this.props.tasks(tasks, 'unbilled'))
    .then(tasks => console.log(tasks))
  }
 
  render() {
    return (
      <div>Here are my tasks</div>
    )
  }
}

// will i need this to pass into task container?
// const mapStateToProps = state => {
//   return { 
//     billed_tasks: state.billed_tasks,
//     unbilled_tasks: state.unbilled_tasks
//   }
// }

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { tasks }, dispatch);
};

export default connect(null, mapDispatchToProps)(Tasks);