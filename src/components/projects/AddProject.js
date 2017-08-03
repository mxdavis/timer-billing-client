import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import apiRequest from '../../redux/modules/apiRequests'
import { addProjectToClient } from '../../redux/actions/clients/clients'

class AddProject extends Component {

  constructor(props){
    super(props)
    this.state = {
      name: '',
      bill_rate: '',
      clientId: this.props.clientId,
      clientName: this.props.clientName
    }
  }
  
  handleOnSubmit = event => {
    event.preventDefault();
    apiRequest.post(`/projects/`, this.state)
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
        <form className="uk-form" onSubmit={this.handleOnSubmit}>
          <fieldset>
              <legend>Add Project</legend>
              <div className="uk-form-row">
                <legend>Project Name</legend>
                <input
                type="text"
                placeholder="Project Name"
                name="name"
                onChange={this.handleOnChange}
                value={this.state.name} />
              </div>
              <div className="uk-form-row">
                <legend>Project Bill Rate</legend>
                <input
                type="text"
                placeholder="Project Bill Rate"
                name="bill_rate"
                onChange={this.handleOnChange}
                value={this.state.bill_rate} />
              </div>
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