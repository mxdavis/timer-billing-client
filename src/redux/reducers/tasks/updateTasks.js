export default function updateTasks(state = {
  unbilled_tasks: [], 
  billed_tasks: []
}, action) {
  switch (action.type) {
    case 'UPDATE_UNBILLED_TASKS':
    debugger
      state.unbilled_tasks = Object.assign({}, state.unbilled_tasks)
      break
    case 'UPDATE_BILLED_TASKS':
      Object.assign({}, state.billed_tasks)
      break
    default:
      return state;
  }
};