export default (state = [], action) => {
  switch(action.type) {
    case `STOP_FETCHING_${action.dataType}`:
      return state.filter((i) => i !== action.dataType.toLocaleLowerCase())
    case `START_FETCHING_${action.dataType}`:
      return state.concat(action.dataType.toLocaleLowerCase())
    default: 
      return state;
  }
};

