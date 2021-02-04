import { put, call, select } from 'redux-saga/effects'
import { register, logIn, getProfile, authenticate, authenticateWithoutTokenChange, setFavorite } from 'Store/sagas/tokenSaga'
import authTypes from 'Store/types/authTypes'
import * as Api from 'Services/api'

describe('token (auth) sagas', () => {
  test('register', () => {
    const payload = {
      username: 'jose',
      password: 'jose',
      email: 'jose@jose.com'
    }
    const gen = register({ type: authTypes.SIGNUP, payload })

    expect(gen.next()).toEqual({ done: false, value: put({ type: authTypes.SIGNUP_PENDING }) })
    expect(gen.next()).toEqual({ done: false, value: call(Api.SignUp, payload) })
    expect(gen.next()).toEqual({ done: false, value: put({ type: authTypes.SIGNUP_SUCCESS }) })
    expect(gen.next()).toEqual({ done: true, value: undefined })
  })

  test('login', () => {
    const payload = {
      password: 'jose',
      email: 'jose@jose.com'
    }
    const gen = logIn({ type: authTypes.SIGNIN, payload })

    expect(gen.next()).toEqual({ done: false, value: put({ type: authTypes.SIGNIN_PENDING }) })
    expect(gen.next()).toEqual({ done: false, value: call(Api.SignIn, payload) })
    expect(gen.next()).toEqual({ done: false, value: put({ type: authTypes.SIGNIN_SUCCESS }) })
    expect(gen.next()).toEqual({ done: true, value: undefined })
  })

  test('getProfile', () => {
    const gen = getProfile()

    expect(gen.next()).toEqual({ done: false, value: select() })
    expect(gen.next()).toEqual({ done: true, value: undefined })
  })

  test('authenticate', () => {
    const payload = {
      headers: { 'auth-token': '939321kdaj' },
      data: {
        username: 'jose',
        email: 'jose@jose.com',
        favoritesIds: [1, 2, 3]
      }
    }
    const gen = authenticate({ type: authTypes.SIGNIN_SUCCESS, payload })

    expect(gen.next()).toEqual({ done: false,
      value: put({
        type: authTypes.TOKEN_SUCCESS,
        payload: {
          token: payload.headers['auth-token'],
          favorites: payload.data.favoritesIds,
          email: payload.data.email,
          username: payload.data.username
        }
      })
    })
    expect(gen.next()).toEqual({ done: true, value: undefined })
  })
  test('authenticateWithoutTokenChange', () => {
    const payload = {
      data: {
        username: 'jose',
        email: 'jose@jose.com',
        favoritesIds: [1, 2, 3]
      }
    }
    const gen = authenticateWithoutTokenChange({ type: authTypes.SIGNIN_SUCCESS, payload })

    expect(gen.next()).toEqual({ done: false,
      value: put({
        type: authTypes.SET_PROFILE,
        payload: {
          favorites: payload.data.favoritesIds,
          email: payload.data.email,
          username: payload.data.username,
        }
      })
    })
    expect(gen.next()).toEqual({ done: true, value: undefined })
  })

  test('setFavorite', () => {
    const payload = 1

    const gen = setFavorite({ type: authTypes.SET_FAVORITE, payload })

    expect(gen.next()).toEqual({ done: false, value: call(Api.setFavorite, { favorite: payload }) })
    expect(gen.next()).toEqual({ done: false, value: put({ type: authTypes.PROFILE_SUCCESS }) })
    expect(gen.next()).toEqual({ done: true, value: undefined })
  })
})
