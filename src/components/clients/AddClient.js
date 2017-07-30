import React, { Component } from 'react'

import apiRequest from '../../redux/modules/apiRequests'

export default class AddClient extends Component {

  constructor(props){
    super(props)
    this.state = {
      name: '',
      email: ''
    }
  }
  
  handleOnSubmit = event => {
    event.preventDefault();
    apiRequest.post('clients/', this.state)
    this.props.router.push('/clients');
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
              <legend>Add Client</legend>
              <div className="uk-form-row">
                <legend>Client Name</legend>
                <input
                type="text"
                placeholder="Client Name"
                name="name"
                onChange={this.handleOnChange} />
              </div>
              <div className="uk-form-row">
                <legend>Client E-mail</legend>
                <input
                type="text"
                placeholder="Client E-mail"
                name="email"
                onChange={this.handleOnChange} />
              </div>
              <input
            type="submit"
            value="Add Client" />
          </fieldset>
        </form>
      </div>
    );
  }
};