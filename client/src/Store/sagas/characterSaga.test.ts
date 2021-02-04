import { put, call } from 'redux-saga/effects'
import { getCharacters, getFavorites } from 'Store/sagas/charactersSaga'
import charactersTypes from 'Store/types/charactersTypes'
import * as Api from 'Services/api'

describe('characters sagas', () => {
  test('getCharacters', () => {
    const payload = 1
    const gen = getCharacters({ type: charactersTypes.GET_CHARACTERS, payload })

    expect(gen.next()).toEqual({ done: false, value: put({ type: charactersTypes.CHARACTERS_PENDING }) })
    expect(gen.next()).toEqual({ done: false, value: call(Api.getCharacters, payload) })
    expect(gen.next()).toEqual({ done: false, value: put({ type: charactersTypes.CHARACTERS_SUCCESS, payload: [] }) })
    expect(gen.next()).toEqual({ done: true, value: undefined })
  })

  test('getFavorites', () => {
    const payload = ['1', '2', '3']
    const gen = getFavorites({ type: charactersTypes.GET_CHARACTERS, payload })

    expect(gen.next()).toEqual({ done: false, value: put({ type: charactersTypes.CHARACTERS_PENDING }) })
    expect(gen.next()).toEqual({ done: false, value: call(Api.getFavorites, payload) })
    expect(gen.next()).toEqual({ done: false, value: put({ type: charactersTypes.CHARACTERS_SUCCESS, payload: [] }) })
    expect(gen.next()).toEqual({ done: true, value: undefined })
  })
})
