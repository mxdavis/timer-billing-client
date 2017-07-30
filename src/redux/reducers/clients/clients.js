export default function updateClient(state = [], action) {
  switch (action.type) {
    case 'ADD_CLIENT':
      return Object.assign({}, state.clients)
    case 'UPDATE_CLIENTS':
      const clients = action.clients.filter(c => c != null)
      return Object.assign({}, state, {clients: clients})
    default:
      return state;
  }
};