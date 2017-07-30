import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import Select, { Creatable } from 'react-select';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

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
      clientArray: [],
			projectData: [],
			clientValue: {},
			projectValue: {},
			startDate: moment()
    }
  }

	handleDateChange = date => {
    this.setState({
      startDate: date
    });
  }
  
  convertClientstoDropdown() {
    if (!this.props.clientArray.isEmpty() && this.state.clientData.isEmpty()){
      const clientData =  this.props.clientArray.clients.map(client => {
        var rObj = {};
        rObj["value"] = client.id;
        rObj["label"] = client.name
        return rObj;
      })   
    this.setState({clientData})
	  }
  }

	convertProjectstoDropdown = (clientId) => {
    const projectOfClient = this.props.clientArray.clients.filter(c => c.id === clientId)
		const projectData =  projectOfClient[0].projects.map(project => {
			var rObj = {};
			rObj["value"] = project.id;
			rObj["label"] = project.name
			rObj["price"] = project.bill_rate
			return rObj;
		})   
	this.setState({projectData})
	}

  componentDidMount() {
    this.props.fetchClients()
  }

  componentDidUpdate(){
    this.convertClientstoDropdown()
  }

	logClientChange = (value) => {
		const clientId = value.value
		this.setState({clientValue: value})
		this.convertProjectstoDropdown(clientId)
  }

	logProjectChange = (value) => {
		this.setState({projectValue: value})
  }
  
	projectForm() {
		return 	<Creatable
			name={this.state.projectValue.label}
			value={this.state.projectValue.value}
			options={this.state.projectData}
			onChange={this.logProjectChange}
		/> 
	}

	clientForm() {
		return this.state.clientData.isEmpty() ?
			<h1>Wait for form to load</h1> :

			<Select
				name={this.state.clientValue.label}
				value={this.state.clientValue.value}
				options={this.state.clientData}
				onChange={this.logClientChange}
			/> 
	}
 
  render() {
     var options = this.state.clientData;
    return (
      <div>
        <form className="uk-form">
          <fieldset>
              <legend>Add Task</legend>
              <div className="uk-form-row">
								<legend>Select Client</legend>
								{this.clientForm()}
							</div>
              <div className="uk-form-row">
								<legend>Select Project</legend>
								{this.projectForm()}
							</div>
              <div className="uk-form-row">
								<legend>Description</legend>
                <textarea placeholder="Description here">Description</textarea>
                <p className="uk-form-help-block">...</p>
              </div>

              <div className="uk-form-row">
								<legend>Select Date</legend>
                <DatePicker
									selected={this.state.startDate}
									onChange={this.handleDateChange}
								/>;
                <input type="text" />
              </div>
              <label><input type="checkbox" /> ...</label>*/}
          </fieldset>
        </form>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return { 
    clientArray: state.clients,
    fetchingData: state.fetchingData,
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { fetchClients }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);
