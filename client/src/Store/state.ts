import { AuthState } from 'Store/reducers/authReducer'
import { CharactersState } from 'Store/reducers/charactersReducer'

export interface BaseState {
  auth: AuthState;
  characters: CharactersState;
}

export interface State extends BaseState {}
