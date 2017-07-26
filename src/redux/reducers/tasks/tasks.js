export default function updateTasks(state = {
  unbilled_tasks: [], 
  billed_tasks: []
}, action) {
  debugger
  switch (action.type) {
    case 'UPDATE_UNBILLED_TASKS':
      debugger
      Object.assign({}, state.unbilled_tasks)
      break
    case 'UPDATE_BILLED_TASKS':
      Object.assign({}, state.billed_tasks)
      break
    default:
      return state;
  }
};