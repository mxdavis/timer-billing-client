import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import {addClient} from '../../redux/actions/clients/clients'
import apiRequest from '../../redux/modules/apiRequests'

class AddClient extends Component {

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
    this.props.addClient(this.state)
    this.setState({name: '', email: ''})
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
                onChange={this.handleOnChange}
                value={this.state.name} />
              </div>
              <div className="uk-form-row">
                <legend>Client E-mail</legend>
                <input
                type="text"
                placeholder="Client E-mail"
                name="email"
                onChange={this.handleOnChange}
                value={this.state.email} />
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

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { addClient }, dispatch);
};

export default connect(null, mapDispatchToProps)(AddClient);