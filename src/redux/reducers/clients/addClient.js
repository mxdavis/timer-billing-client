export default function addClient(state = {
  name: '', email: ''
}, action) {
  switch (action.type) {
    case 'ADD_CLIENT':
    debugger
    return Object.assign({}, state.client)
    default:
      return state;
  }
};