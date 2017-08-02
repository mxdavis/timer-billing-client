import { stopFetchingData, startFetchingData } from '../fetchingData';
import apiRequest from '../../modules/apiRequests'

export function clients(clients){
  return {
    type: 'UPDATE_CLIENTS',
    clients
  }
}

export function addProjectToClient(project){
  return {
    type: 'ADD_PROJECT_TO_CLIENT',
    project
  }
}

export function addClient(client){
  return {
    type: 'ADD_CLIENT',
    client
  }
}

export function fetchClients() {
  return dispatch => {
    dispatch(startFetchingData("CLIENTS"))
    apiRequest.get('users/1/clients')
     .then(data => {
        dispatch(clients(data))
        dispatch(stopFetchingData("CLIENTS"))
      })
    .catch(error => {
        console.log(error)
    })
  }
}
