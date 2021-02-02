import { SimpleAction } from 'Store/actions'
import authTypes from 'Store/types/authTypes'

export interface AuthState {
  token: string;
  loginPagePending: boolean
}

const initialState: AuthState = {
  token: '',
  loginPagePending: false
}

const reducer = (state = initialState, action: SimpleAction) => {
  switch (action.type) {
    case authTypes.TOKEN_SUCCESS:
      return { ...state, token: action.payload, loginPagePending: false }
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
      return { ...state, loginPagePending: false }
    default:
      return state
  }
}

export default reducer
