/* eslint-disable no-unused-vars */
import { applyMiddleware, compose, createStore, Store } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducer from 'Store/reducers/reducer'
import { State } from 'Store/state'
import rootSaga from 'Store/sagas'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ as typeof compose || compose

const middlewares = [
  sagaMiddleware
]

export const store: Store<State> = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middlewares))
)

sagaMiddleware.run(rootSaga)
