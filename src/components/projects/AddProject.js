import React, { Component } from 'react'
import {Redirect} from 'react-router-dom';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import apiRequest from '../../redux/modules/apiRequests'
import {addProjectToClient} from '../../redux/actions/clients/clients'

class AddProject extends Component {

  constructor(props){
    super(props)
    this.state = {
      name: '',
      bill_rate: '',
      clientId: this.props.clientId,
      redirect: false
    }
  }
  
  handleOnSubmit = event => {
    event.preventDefault();
    // debugger
    // apiRequest.post(`projects/`, this.state)
    this.props.addProjectToClient(this.state)
    this.setState({name: '', bill_rate: ''})
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
 
  render() {
    return (
      <div>
        {this.state.redirect ? <Redirect to="/clients"/> : null}
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

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { addProjectToClient }, dispatch);
};

export default connect(null, mapDispatchToProps)(AddProject);