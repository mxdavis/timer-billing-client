import {createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import clients from '../reducers/clients/clients'
import tasks from '../reducers/tasks/tasks'
import fetchingData from '../reducers/fetchingData'

const reducers = combineReducers({
  tasks, clients, fetchingData
})

const middleware = [thunk]

export default createStore(
  reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), 
  applyMiddleware(...middleware)
)
