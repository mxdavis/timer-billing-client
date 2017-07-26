export default function tasks(state = {
    unbilled_tasks: [], 
    billed_tasks: []
}, action) {
  switch (action.type) {
    case 'UPDATE_UNBILLED_TASKS':
      const unbilled_tasks = action.tasks.filter(t => t != null)
      return Object.assign({}, state.tasks, {
        unbilled_tasks: unbilled_tasks
      });
     case 'UPDATE_BILLED_TASKS':
      const billed_tasks = action.tasks.filter(t => t != null)
      return Object.assign({}, state.tasks, {
        billed_tasks: billed_tasks
      });
    default:
      return state;
  }
};