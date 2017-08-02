export default function updateClient(state = [], action) {
  switch (action.type) {
    case 'ADD_CLIENT':
      return Object.assign({}, state.clients)
    case 'UPDATE_CLIENTS':
      const clients = action.clients.filter(c => c != null)
      return Object.assign({}, state, {clients: clients})
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
    case "ADD_CLIENT":
     return [...state.clients, action.client]
    default:
      return state;
  }
};