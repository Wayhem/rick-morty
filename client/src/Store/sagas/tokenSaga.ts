import { call, put, takeEvery } from 'redux-saga/effects'
import { SimpleAction } from 'Store/actions'
import authTypes from 'Store/types/authTypes'
import * as Api from 'Services/api'

const TokenCall = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve('Soon token will be called')
  }, 250)
})

export function* register(action: SimpleAction) {
  const result = yield call(Api.SignUp, action.payload)

  if (result instanceof Error) {
    yield put({ type: authTypes.SIGNUP_ERROR, payload: result.message })
  } else {
    yield put({ type: authTypes.SIGNUP_SUCCESS, payload: result })
  }
}

export function* logIn(action: SimpleAction) {
  const result = yield call(Api.SignIn, action.payload)

  if (result instanceof Error) {
    yield put({ type: authTypes.SIGNIN_ERROR, payload: result.message })
  } else {
    yield put({ type: authTypes.SIGNIN_SUCCESS, payload: result })
  }
}

export function* getToken() {
  yield put({ type: authTypes.TOKEN_PENDING })

  const result = yield call(TokenCall)

  if (result instanceof Error) {
    yield put({ type: authTypes.TOKEN_ERROR, payload: result.message })
  } else {
    yield put({ type: authTypes.TOKEN_SUCCESS, payload: result })
  }
}

function* watchToken() {
  yield takeEvery(authTypes.GET_TOKEN, getToken)
  yield takeEvery(authTypes.SIGNUP, register)
  yield takeEvery(authTypes.SIGNIN, logIn)
}

export default watchToken
