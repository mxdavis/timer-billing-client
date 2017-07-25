import {createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import {reducer as form } from 'redux-form'

import fetchingTasks from '../reducers/fetchingTasksReducer'
import addClient from '../reducers/addClient'
import addProject from '../reducers/addProject'
import addTask from '../reducers/addTask'

const reducers = combineReducers({
  form, fetchingTasks, addClient, addProject, addTask
})

const middleware = [thunk]

export default createStore(
  reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), 
  applyMiddleware(...middleware)
)
