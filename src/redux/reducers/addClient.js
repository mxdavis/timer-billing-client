export default function addClient(state = {
  name: '', 
  email: ''
}, action) {
  switch (action.type) {
    case 'ADD_CLIENT':
      debugger
 
    default:
      return state;
  }
};