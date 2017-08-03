import {Redirect} from 'react-router-dom';

import { fetchClients } from '../../redux/actions/clients/clients'

export default {
  
  convertClients(){
    return dispatch => {
      if (!this.state.clients.clients){
        dispatch(fetchClients)
        if (!this.state.clients.clients && !this.state.fetchingData.includes("CLIENTS")){
          return <Redirect to='/cients/new'/>
        }
      }
      return this.state.clients.clients.map(client => {
        var rObj = {};
        rObj["value"] = client.id;
        rObj["label"] = client.name
        return rObj;
      })   
    }
  }
}