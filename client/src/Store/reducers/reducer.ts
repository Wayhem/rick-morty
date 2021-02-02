import { combineReducers } from 'redux'
import authReducer from 'Store/reducers/authReducer'

const reducers = {
  auth: authReducer
}

export default combineReducers(reducers)
