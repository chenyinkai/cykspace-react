import { createStore, combineReducers } from 'redux'
import * as loading from './loading/reducers'

const store = createStore(
  combineReducers({ ...loading }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
