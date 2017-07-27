export const stopFetchingData = (dataType) => {
  debugger
  return { type: `STOP_FETCHING_${dataType}` }
}

export const startFetchingData = (dataType) => {
  return { type: `START_FETCHING_${dataType}` }
}