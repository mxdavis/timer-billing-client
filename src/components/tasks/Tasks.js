import React, { Component } from 'react';

import { updateTasks } from '../../redux/actions/tasks/tasks'
import apiRequest from '../../redux/modules/apiRequests'

require('isomorphic-fetch');

export default class Tasks extends Component {

  constructor(props){
    super(props)
    this.state = {
      unbilled_tasks: [],
      billed_tasks: []
    }
  }
  componentDidMount() {
    apiRequest.get('unbilled_tasks')
    .then(tasks => this.setState({unbilled_tasks: tasks}))
    debugger
  }
 
  render() {
    return (
      <div>Here are my tasks</div>
    )
  }
}