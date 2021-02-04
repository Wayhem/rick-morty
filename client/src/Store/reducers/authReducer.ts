import { AnyAction } from 'redux'
import authTypes from 'Store/types/authTypes'

export interface AuthState {
  token: string;
  loginPagePending: boolean;
  isLoggedIn: boolean;
  username: string;
  email: string;
  favorites: number[];
}

const initialState: AuthState = {
  token: '',
  loginPagePending: false,
  isLoggedIn: false,
  username: '',
  email: '',
  favorites: []
}

const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case authTypes.TOKEN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        username: action.payload.username,
        email: action.payload.email,
        favorites: action.payload.favorites,
        loginPagePending: false,
        isLoggedIn: true
      }
    case authTypes.SET_PROFILE:
      return {
        ...state,
        username: action.payload.username,
        email: action.payload.email,
        favorites: action.payload.favorites,
        loginPagePending: false,
        isLoggedIn: true
      }
    case authTypes.TOKEN_PENDING:
    case authTypes.SIGNIN_PENDING:
    case authTypes.SIGNUP_PENDING:
      return { ...state, loginPagePending: true }
    case authTypes.SIGNIN_SUCCESS:
    case authTypes.SIGNUP_SUCCESS:
      return { ...state, loginPagePending: false }
    case authTypes.SIGNIN_ERROR:
    case authTypes.SIGNUP_ERROR:
    case authTypes.TOKEN_ERROR:
    case authTypes.LOGOUT:
      return {
        ...state,
        loginPagePending: false,
        isLoggedIn: false,
        token: '',
        username: '',
        email: '',
        favorites: []
      }
    default:
      return state
  }
}

export default reducer
