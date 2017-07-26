import React, { Component } from 'react';

import apiRequest from '../../redux/modules/apiRequests'

require('isomorphic-fetch');

export default class Tasks extends Component {
  componentDidMount() {
    apiRequest.get('unbilled_tasks').then(data => console.log(data))
  }
 
  render() {
    return (
      <div>Here are my tasks</div>
    )
  }
}