import { call, put, takeEvery } from 'redux-saga/effects'
import { get } from 'lodash'
import charactersTypes from 'Store/types/charactersTypes'
import * as Api from 'Services/api'

export function* getCharacters() {
  yield put({ type: charactersTypes.CHARACTERS_PENDING })

  try {
    const result = yield call(Api.getCharacters)
    const results = get(result, 'data.results', [])
    yield put({ type: charactersTypes.CHARACTERS_SUCCESS, payload: results })
  } catch (e) {
    yield put({ type: charactersTypes.CHARACTERS_ERROR, payload: e.message })
  }
}

function* watchCharacters() {
  yield takeEvery(charactersTypes.GET_CHARACTERS, getCharacters)
}

export default watchCharacters
