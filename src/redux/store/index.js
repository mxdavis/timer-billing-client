import {createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import {reducer as form } from 'redux-form'

import fetchingTasks from '../reducers/fetchingTasksReducer'

const reducers = combineReducers({
  form, fetchingTasks
})

const middleware = [thunk]

export default createStore(
  reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), 
  applyMiddleware(...middleware)
)
