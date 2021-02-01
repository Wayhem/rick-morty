import { call, put, takeEvery } from 'redux-saga/effects'

const TokenCall = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve('Soon token will be called')
  }, 250)
})

export function* getToken() {
  yield put({ type: 'TOKEN_PENDING' })

  const result = yield call(TokenCall)

  if (result instanceof Error) {
    yield put({ type: 'TOKEN_ERROR', payload: 'Error loading payload' })
  } else {
    yield put({ type: 'TOKEN_SUCCESS', payload: result })
  }
}

function* watchToken() {
  yield takeEvery('GET_TOKEN', getToken)
}

export default watchToken
