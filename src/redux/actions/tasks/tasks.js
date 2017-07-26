export function updateTasks(tasks, billed_status){
  if (billed_status === 'unbilled'){
    return {
      type: 'UPDATE_UNBILLED_TASKS',
      tasks
    }
  } else if (billed_status === 'billed'){
    return {
      type: 'UPDATE_BILLED_TASKS',
      tasks
    }
  }
}