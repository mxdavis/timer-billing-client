import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import { clients, fetchClients } from '../../redux/actions/clients/clients'
import {startFetchingData, stopFetchingData} from '../../redux/actions/fetchingData'
import Client from './Client'
import AddClient from './AddClient'

class Clients extends Component {

  componentDidMount() {
    this.props.fetchClients()
  }

  showClient = () => {
    return this.props.clientArray.clients !== undefined && this.props.clientArray.clients !== [] ? 
    <div>
     {this.props.clientArray.clients.map(client => <Client client={client}/>)}
    </div> : 
    this.props.clientArray.clients === undefined? 
    <h3> Please wait for your clients to load </h3> :
    <h3> Seems you have no clients, please add some! </h3>
  }

 
  render() {
    return (
      <div>
        <h1 className="uk-heading-line uk-text-center padding-top"><span>Clients:</span></h1>
        {this.showClient()}
        <AddClient />
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