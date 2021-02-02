import { AuthState } from 'Store/reducers/authReducer'

export interface BaseState {
  auth: AuthState
}

export interface State extends BaseState {}
