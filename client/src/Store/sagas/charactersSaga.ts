import { call, put, takeEvery } from 'redux-saga/effects'
import { get } from 'lodash'
import charactersTypes from 'Store/types/charactersTypes'
import * as Api from 'Services/api'
import { SimpleAction } from 'Store/actions'

export function* getCharacters(action: SimpleAction) {
  yield put({ type: charactersTypes.CHARACTERS_PENDING })

  const page = action.payload

  try {
    const result = yield call(Api.getCharacters, page)
    const results = get(result, 'data.results', [])
    yield put({ type: charactersTypes.CHARACTERS_SUCCESS, payload: results })
  } catch (e) {
    yield put({ type: charactersTypes.CHARACTERS_ERROR, payload: e.message })
  }
}

export function* getFavorites(action: SimpleAction) {
  yield put({ type: charactersTypes.CHARACTERS_PENDING })

  const ids = get(action, 'payload')

  try {
    const result = yield call(Api.getFavorites, ids)
    const results = get(result, 'data', [])
    yield put({ type: charactersTypes.CHARACTERS_SUCCESS, payload: results })
  } catch (e) {
    yield put({ type: charactersTypes.CHARACTERS_ERROR, payload: e.message })
  }
}

export function* getCharacter(action: SimpleAction) {
  const id = action.payload

  try {
    const result = yield call(Api.getCharacter, id)
    const results = get(result, 'data', [])
    yield put({ type: charactersTypes.CHARACTER_SUCCESS, payload: results })
  } catch (e) {
    yield put({ type: charactersTypes.CHARACTER_ERROR, payload: e.message })
  }
}

function* watchCharacters() {
  yield takeEvery(charactersTypes.GET_CHARACTERS, getCharacters)
  yield takeEvery(charactersTypes.GET_CHARACTER, getCharacter)
  yield takeEvery(charactersTypes.GET_FAVORITES, getFavorites)
}

export default watchCharacters
