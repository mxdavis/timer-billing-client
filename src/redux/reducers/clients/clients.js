export default function updateClient(state = {
  name: '', 
  email: ''
}, action) {
  switch (action.type) {
    case 'ADD_CLIENT':
      Object.assign({}, state.clients)
      break
    default:
      return state;
  }
};