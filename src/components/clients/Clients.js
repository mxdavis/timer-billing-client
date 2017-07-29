import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import { clients, fetchClients } from '../../redux/actions/clients/clients'
import {startFetchingData, stopFetchingData} from '../../redux/actions/fetchingData'
import Client from './Client'

class Clients extends Component {

  componentDidMount() {
    this.props.fetchClients()
  }

  showClient() {
    debugger
  }

 
  render() {
    return (
      <div>
        <h1 className="uk-heading-line uk-text-center padding-top"><span>Clients:</span></h1>
          {this.showClient()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { 
    clientArray: state.clients,
    fetchingData: state.fetchingData

  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { clients, startFetchingData, stopFetchingData, fetchClients }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Clients);