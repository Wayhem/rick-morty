import { call, put, takeEvery, takeLatest, select } from 'redux-saga/effects'
import { get } from 'lodash'
import { SimpleAction } from 'Store/actions'
import authTypes from 'Store/types/authTypes'
import * as Api from 'Services/api'

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

export function* getProfile() {
  const state = yield select()
  const { token } = state.auth

  if (token) {
    yield put({ type: authTypes.TOKEN_PENDING })

    try {
      const result = yield call(Api.Profile)
      yield put({ type: authTypes.PROFILE_SUCCESS, payload: result })
    } catch (e) {
      yield put({ type: authTypes.TOKEN_ERROR, payload: e.message })
    }
  }
}

export function* authenticate(action: SimpleAction) {
  const token = get(action, 'payload.headers.auth-token', '')
  const username = get(action, 'payload.data.username', '')
  const email = get(action, 'payload.data.email', '')
  const favorites = get(action, 'payload.data.favoritesIds', '')

  if (!token) {
    yield put({ type: authTypes.TOKEN_ERROR, payload: 'Could not find token' })
  } else {
    yield put({ type: authTypes.TOKEN_SUCCESS, payload: { token, email, username, favorites } })
  }
}

export function* setFavorite(action: SimpleAction) {
  const favorite = action.payload
  try {
    const result = yield call(Api.setFavorite, { favorite })
    yield put({ type: authTypes.PROFILE_SUCCESS, payload: result })
  } catch (e) {
    yield put({ type: authTypes.TOKEN_ERROR, payload: e.message })
  }
}

export function* authenticateWithoutTokenChange(action: SimpleAction) {
  const username = get(action, 'payload.data.username', '')
  const email = get(action, 'payload.data.email', '')
  const favorites = get(action, 'payload.data.favoritesIds', '')

  yield put({ type: authTypes.SET_PROFILE, payload: { email, username, favorites } })
}

function* watchToken() {
  yield takeEvery(authTypes.GET_TOKEN, getProfile)
  yield takeEvery(authTypes.SIGNUP, register)
  yield takeEvery(authTypes.SIGNIN, logIn)
  yield takeEvery(authTypes.SET_FAVORITE, setFavorite)
  yield takeLatest(authTypes.GET_PROFILE, getProfile)
  yield takeLatest([authTypes.SIGNIN_SUCCESS, authTypes.SIGNUP_SUCCESS], authenticate)
  yield takeLatest([authTypes.PROFILE_SUCCESS], authenticateWithoutTokenChange)
}

export default watchToken
