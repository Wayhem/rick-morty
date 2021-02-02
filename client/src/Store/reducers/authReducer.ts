import { SimpleAction } from 'Store/actions'
import authTypes from 'Store/types/authTypes'

export interface AuthState {
  token: string;
}

const initialState: AuthState = {
  token: ''
}

const reducer = (state = initialState, action: SimpleAction) => {
  switch (action.type) {
    case authTypes.TOKEN_SUCCESS:
      return { ...state, token: action.payload }
    default:
      return state
  }
}

export default reducer
