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
      clientArray: [],
      client: '',
      selectValue: ''
    }
  }

	getDefaultProps(){
		return {
			label: 'Clients:',
			searchable: true,
		};
	}

	getInitialState() {
		return {
			disabled: false,
			searchable: this.props.searchable,
			selectValue: 'select client',
			clearable: true,
		};
	}

	switchClient(e) {
		var newClient = e.target.value;
		console.log('Client changed to ' + newClient);
		this.setState({
			client: newClient,
			selectValue: null
		});
	}

	updateValue (newValue) {
		console.log('Client changed to ' + newValue);
    debugger
		this.setState({
			selectValue: newValue
		});
	}

	focusClientSelect () {
		this.refs.clientSelect.focus();
	}

	toggleCheckbox (e) {
		let newState = {};
		newState[e.target.name] = e.target.checked;
		this.setState(newState);
	}
  
  convertClientstoDropdown() {
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
     var options = this.state.clientData;
    return (
      <div>

			<div className="section">
				<h3 className="section-heading">{this.props.label}</h3>
				<Select ref="clientSelect" autofocus options={options} simpleValue clearable={this.state.clearable} name="selected-client" disabled={this.state.disabled} value={this.state.selectValue} onChange={this.updateValue} searchable={this.state.searchable} />

				<div style={{ marginTop: 14 }}>
					<button type="button" onClick={this.focusClientSelect}>Focus Select</button>
					<label className="checkbox" style={{ marginLeft: 10 }}>
						<input type="checkbox" className="checkbox-control" name="searchable" checked={this.state.searchable} onChange={this.toggleCheckbox}/>
						<span className="checkbox-label">Searchable</span>
					</label>
					<label className="checkbox" style={{ marginLeft: 10 }}>
						<input type="checkbox" className="checkbox-control" name="disabled" checked={this.state.disabled} onChange={this.toggleCheckbox}/>
						<span className="checkbox-label">Disabled</span>
					</label>
					<label className="checkbox" style={{ marginLeft: 10 }}>
						<input type="checkbox" className="checkbox-control" name="clearable" checked={this.state.clearable} onChange={this.toggleCheckbox}/>
						<span className="checkbox-label">Clearable</span>
					</label>
				</div>
				{/*<div className="checkbox-list">
					<label className="checkbox">
						<input type="radio" className="checkbox-control" checked={this.state.country === 'AU'} value="AU" onChange={this.switchCountry}/>
						<span className="checkbox-label">Australia</span>
					</label>
					<label className="checkbox">
						<input type="radio" className="checkbox-control" checked={this.state.country === 'US'} value="US" onChange={this.switchCountry}/>
						<span className="checkbox-label">United States</span>
					</label>
				</div>*/}
			</div>



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
    fetchingData: state.fetchingData,
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { fetchClients }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);
