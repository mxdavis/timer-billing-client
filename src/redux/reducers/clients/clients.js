export default function updateClient(state = [], action) {
  switch (action.type) {
    case 'ADD_CLIENT':
      const newClient = Object.assign({}, action.client, {projects: []})
      const addClients = state.clients.concat(newClient)
      return Object.assign({}, state, {clients: addClients})
    case 'UPDATE_CLIENTS':
      const updateClients = action.clients.filter(c => c != null)
      return Object.assign({}, state, {clients: updateClients})
    case 'ADD_PROJECT_TO_CLIENT':
      const client = state.clients.filter(c => c.id === action.project.clientId)
      const updatedProjects = [...client[0].projects, action.project]
      return { 
       ...state, 
       clients: state.clients.map(
           (client) => client.id === action.project.clientId ? 
                                     {...client, projects: updatedProjects}
                                     : client
       )
    }
    default:
      return state;
  }
};