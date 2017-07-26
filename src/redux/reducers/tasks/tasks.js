export default function tasks(state = {
  unbilled_tasks: [], 
  billed_tasks: []
}, action) {
  switch (action.type) {
    case 'UPDATE_UNBILLED_TASKS':
      const unbilled_tasks = action.tasks.filter(t => t != null)
      return state.unbilled_tasks = Object.assign({}, unbilled_tasks)
     case 'UPDATE_BILLED_TASKS':
       const billed_tasks = action.tasks.filter(t => t != null)
       return state.billed_tasks = Object.assign({}, billed_tasks)
    default:
      return state;
  }
};