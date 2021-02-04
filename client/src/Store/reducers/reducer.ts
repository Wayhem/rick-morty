import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import authReducer from 'Store/reducers/authReducer'
import charactersReducer from 'Store/reducers/charactersReducer'
import storage from 'redux-persist/lib/storage'

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token']
}

const reducers = {
  auth: persistReducer(authPersistConfig, authReducer),
  characters: charactersReducer
}

export default combineReducers(reducers)
