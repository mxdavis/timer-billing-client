import { fetchClients } from '../../redux/actions/clients/clients'

export default {
  
  convertClients(){
    return dispatch => {
      if (!this.state.clients.clients){
        dispatch(fetchClients)
        //what happens if no one has any clients yet
        if (!this.state.clients.clients && !this.state.fetchingData.includes("CLIENTS")){
          //redirect to add client page
          return "you need to add clients"
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