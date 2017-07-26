import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { addClient } from '../../redux/actions/clients/addClient'
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
    const { addClient, history } = this.props
    addClient(this.state);
    apiRequest.post('clients/', this.state)
    history.push('/tasks');
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

const mapStateToProps = state => {
  return { 
    clients: state.clients
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { 
    addClient
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AddClient);
