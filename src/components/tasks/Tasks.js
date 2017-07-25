import React, { Component } from 'react';
require('isomorphic-fetch');

export default class Tasks extends Component {
  componentDidMount() {
    const headers =  {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
    const link = 'http://localhost:3000/' || 'https://bill-timer-client.herokuapp.com/'
    fetch('http://localhost:3000/api/v1/users/1/unbilled_tasks', {
      method: 'GET',
      headers: headers
    })
      .then(response => response.json())
      .then(data => console.log(data))
  }
 
  render() {
    return (
      <div>Here are my tasks</div>
    )
  }
}