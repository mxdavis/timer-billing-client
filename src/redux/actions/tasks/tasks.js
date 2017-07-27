import { stopFetchingData, startFetchingData } from '../fetchingData';
import apiRequest from '../../modules/apiRequests'

export function tasks(tasks, billed_status){
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

export function fetchTasks(taskType) {
  return dispatch => {
    dispatch(startFetchingData(taskType.toUpperCase()));
    apiRequest.get(`${taskType}_tasks`)
     .then(data => {
        dispatch(tasks(data, taskType))
        dispatch(stopFetchingData(taskType.toUpperCase()));
      })
    .catch(error => {
        console.log(error)
    })
  }
}
