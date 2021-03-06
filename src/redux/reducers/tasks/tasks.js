export default function tasks(state = {
    unbilled_tasks: [], 
    billed_tasks: []
}, action) {
  switch (action.type) {
    case 'UPDATE_UNBILLED_TASKS':
      return Object.assign({}, state, {
        unbilled_tasks: action.tasks
      });
     case 'UPDATE_BILLED_TASKS':
      return Object.assign({}, state, {
        billed_tasks: action.tasks
      });
     case 'ADD_UNBILLED_TASK':
      const tasksWithoutChangedTask = state.unbilled_tasks.filter(t => t.task_id !== action.task.task_id)
      const changedTask = Object.assign({}, action.task, {
        client: action.task.clientValue.label,
        client_id: action.task.clientValue.value,
        project: action.task.projectValue.label,
        project_id: action.task.projectValue.value,
        total: action.task.bill_rate * action.task.bill_time,
        date: action.task.startDate["_i"]})
      const allTasksWithChanged = tasksWithoutChangedTask.concat(changedTask)
      return Object.assign({}, state, {unbilled_tasks: allTasksWithChanged})
    case 'REMOVE_UNBILLED_TASK':
      const tasksWithoutDeletedTask = state.unbilled_tasks.filter(t => t.task_id !== action.task.task_id)
      return Object.assign({}, state, {unbilled_tasks: tasksWithoutDeletedTask})
    default:
      return state;
  }
};