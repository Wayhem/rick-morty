/* eslint-disable @typescript-eslint/no-unused-vars */
import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import reducer from 'Store/reducers/reducer'
import rootSaga from 'Store/sagas'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['auth', 'characters']
}

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ as typeof compose || compose

const middlewares = [
  sagaMiddleware
]

const persistedReducer = persistReducer(persistConfig, reducer)

const getStore = () => {
  const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(...middlewares))
  )
  const persistor = persistStore(store)
  return { store, persistor }
}

const { store, persistor } = getStore()

sagaMiddleware.run(rootSaga)

export { store, persistor }
