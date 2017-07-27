export default (state = {
  fetching: []
}, action) => {
  switch(action.type) {
    case "STOP_FETCHING_BILLED_TASKS":
      return state.fetching.filter((i) => i !== "billed_tasks")
    case "START_FETCHING_BILLED_TASKS":
      return state.fetching.concat("billed_tasks")
    case "STOP_FETCHING_UNBILLED_TASKS":
      return state.fetching.filter((i) => i !== "unbilled_tasks")
    case "START_FETCHING_UNBILLED_TASKS":
      return state.fetching.concat("unbilled_tasks")
    default: 
      return state;
  }
};

