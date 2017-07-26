import {createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import {reducer as form } from 'redux-form'

import addClient from '../reducers/clients/addClient'
import clients from '../reducers/clients/clients'
import addProject from '../reducers/projects/addProject'
import addTask from '../reducers/tasks/addTask'
import tasks from '../reducers/tasks/tasks'

const reducers = combineReducers({
  form, tasks, addClient, addTask, clients, addProject
})

const middleware = [thunk]

export default createStore(
  reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), 
  applyMiddleware(...middleware)
)
