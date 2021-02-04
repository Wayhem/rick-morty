import { all } from 'redux-saga/effects'
import tokenSaga from 'Store/sagas/tokenSaga'
import characterSaga from 'Store/sagas/charactersSaga'

function* rootSaga(): Generator {
  const sagasList = [tokenSaga(), characterSaga()]

  yield all(sagasList)
}

export default rootSaga
