import { AuthState } from 'Store/reducers/authReducer'
import { CharactersState } from 'Store/reducers/charactersReducer'

export interface State {
  auth: AuthState;
  characters: CharactersState;
}
