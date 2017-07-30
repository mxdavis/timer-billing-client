import { stopFetchingData, startFetchingData } from '../fetchingData';
import apiRequest from '../../modules/apiRequests'

export function clients(clients){
  return {
    type: 'UPDATE_CLIENTS',
    clients
  }
}

export function fetchClients() {
  return dispatch => {
    dispatch(startFetchingData("CLIENTS"))
    apiRequest.get('clients')
     .then(data => {
        dispatch(clients(data))
        dispatch(stopFetchingData("CLIENTS"))
      })
    .catch(error => {
        console.log(error)
    })
  }
}
