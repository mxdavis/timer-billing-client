export default (state = [], action) => {
  switch(action.type) {
    case "STOP_FETCHING_BILLED_TASKS":
      return state.filter((i) => i !== "billed_tasks")
    case "START_FETCHING_BILLED_TASKS":
      return state.concat("billed_tasks")
    case "STOP_FETCHING_UNBILLED_TASKS":
      return state.filter((i) => i !== "unbilled_tasks")
    case "START_FETCHING_UNBILLED_TASKS":
      return state.concat("unbilled_tasks")
    default: 
      return state;
  }
};

