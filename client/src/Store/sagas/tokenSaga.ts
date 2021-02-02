import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { get } from 'lodash'
import { SimpleAction } from 'Store/actions'
import authTypes from 'Store/types/authTypes'
import * as Api from 'Services/api'

const TokenCall = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve('Soon token will be called')
  }, 250)
})

export function* register(action: SimpleAction) {
  yield put({ type: authTypes.SIGNUP_PENDING })

  try {
    const result = yield call(Api.SignUp, action.payload)
    yield put({ type: authTypes.SIGNUP_SUCCESS, payload: result })
  } catch (e) {
    yield put({ type: authTypes.SIGNUP_ERROR, payload: e.message })
  }
}

export function* logIn(action: SimpleAction) {
  yield put({ type: authTypes.SIGNIN_PENDING })

  try {
    const result = yield call(Api.SignIn, action.payload)
    yield put({ type: authTypes.SIGNIN_SUCCESS, payload: result })
  } catch (e) {
    yield put({ type: authTypes.SIGNIN_ERROR, payload: e.message })
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

export function* authenticate(action: SimpleAction) {
  const token = get(action, 'payload.headers.auth-token', '')

  if (!token) {
    yield put({ type: authTypes.TOKEN_ERROR, payload: 'Could not find token' })
  } else {
    yield put({ type: authTypes.TOKEN_SUCCESS, payload: token })
  }
}

function* watchToken() {
  yield takeEvery(authTypes.GET_TOKEN, getToken)
  yield takeEvery(authTypes.SIGNUP, register)
  yield takeEvery(authTypes.SIGNIN, logIn)
  yield takeLatest([authTypes.SIGNIN_SUCCESS, authTypes.SIGNUP_SUCCESS], authenticate)
}

export default watchToken
