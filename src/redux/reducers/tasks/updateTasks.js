export default function updateTasks(state = {
  unbilled_tasks: [], 
  billed_tasks: []
}, action) {
  switch (action.type) {
    case 'UPDATE_UNBILLED_TASKS':
    debugger
      return state.unbilled_tasks = Object.assign({}, state.unbilled_tasks)
    case 'UPDATE_BILLED_TASKS':
      return Object.assign({}, state.billed_tasks)
    default:
      return state;
  }
};