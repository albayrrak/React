import { createStore, combineReducers } from 'redux'
import counterReducer from './reducers/counter'
import apiReducer from './reducers/api'
const reducers = combineReducers({
    counter: counterReducer,
    fetchapi: apiReducer,
})

const store = createStore(reducers)
export default store