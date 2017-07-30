import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import Select from 'react-select';

import selectForms from '../../redux/modules/selectForms'
import { clients, fetchClients } from '../../redux/actions/clients/clients'

Object.prototype.isEmpty = function() {
    for(var key in this) {
        if(this.hasOwnProperty(key))
            return false;
    }
    return true;
}

class AddTask extends Component {

  constructor(props){
    super(props)
    this.state = {
      clientData: [],
      clientArray: []
    }
  }
  
  convertClientstoDropdown() {
    // if (!this.state.clients){
    //     fetchClients
    //     //what happens if no one has any clients yet
    //     // if (!this.state.clients && !this.state.fetchingData.includes("CLIENTS")){
    //     //   //redirect to add client page
    //     //   return "you need to add clients"
    //     // }
    //   }
    debugger
    if (!this.props.clientArray.isEmpty() && this.state.clientData.isEmpty()){
    const clientData =  this.props.clientArray.clients.map(client => {
        var rObj = {};
        rObj["value"] = client.id;
        rObj["label"] = client.name
        return rObj;
      })   
    this.setState({clientData: clientData})
    }
  }

  componentDidMount() {
    this.props.fetchClients()
  }

  componentDidUpdate(){
    this.convertClientstoDropdown()
  }
 
  render() {
    return (
      <div>
        HELLO
        <form class="uk-form">
          <fieldset>
              <legend>Add Task</legend>
              <div class="uk-form-row"></div>
              <div class="uk-form-row">HELLLOO!</div>
              {/*<input type="text" placeholder="" disabled> if user didnt select client yet*/}
              <div class="uk-form-row">
                <textarea cols="10" rows="10" placeholder="Description here">Description</textarea>
                <p class="uk-form-help-block">...</p>
              </div>

              <div class="uk-form-icon">
                <i class="uk-icon-calendar"></i>
                <input type="text" />
              </div>
              <label><input type="checkbox" /> ...</label>
          </fieldset>
        </form>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return { 
    clientArray: state.clients,
    fetchingData: state.fetchingData
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { fetchClients }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);
