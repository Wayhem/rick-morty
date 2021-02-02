import { all } from 'redux-saga/effects'
import tokenSaga from 'Store/sagas/tokenSaga'

function* rootSaga() {
  const sagasList = [tokenSaga()]

  yield all(sagasList)
}

export default rootSaga
