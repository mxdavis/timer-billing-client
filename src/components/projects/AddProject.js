import React, { Component } from 'react'
// import Select from 'react-select';

import apiRequest from '../../redux/modules/apiRequests'

export default class AddProject extends Component {

  constructor(props){
    super(props)
    this.state = {
      name: '',
      bill_rate: '',
      clientId: this.props.clientId
    }
  }
  
  handleOnSubmit = event => {
    debugger
    event.preventDefault();
    apiRequest.post(`projects/`, this.state)
    this.props.router.push('/client');
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
 
  render() {
    return (
      <div>
        <form className="uk-form" onSubmit={this.handleOnSubmit}>
          <fieldset>
              <legend>Add Project</legend>
              <div className="uk-form-row">
                <legend>Project Name</legend>
                <input
                type="text"
                placeholder="Project Name"
                name="name"
                onChange={this.handleOnChange} />
              </div>
              <div className="uk-form-row">
                <legend>Project Bill Rate</legend>
                <input
                type="text"
                placeholder="Project Bill Rate"
                name="bill_rate"
                onChange={this.handleOnChange} />
              </div>
              <input
                type="hidden"
                name={this.props.clientID}
                />
              <input
            type="submit"
            value="Add Project" />
          </fieldset>
        </form>
      </div>
    );
  }
};