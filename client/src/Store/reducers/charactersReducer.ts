import { AnyAction } from 'redux'
import characterTypes from 'Store/types/charactersTypes'
import { Character } from 'Models/charactersModels'

export interface CharactersState {
  characterList: Character[];
  charactersLoading: boolean;
  currentCharacter: Partial<Character>;
}

const initialState: CharactersState = {
  characterList: [],
  charactersLoading: false,
  currentCharacter: {}
}

const reducer = (state = initialState, action: AnyAction): CharactersState => {
  switch (action.type) {
    case characterTypes.CHARACTERS_SUCCESS:
      return { ...state, characterList: action.payload, charactersLoading: false }
    case characterTypes.CHARACTERS_ERROR:
      return { ...state, charactersLoading: false }
    case characterTypes.CHARACTERS_PENDING:
      return { ...state, charactersLoading: true }
    case characterTypes.CHARACTER_SUCCESS:
      return { ...state, currentCharacter: action.payload }
    default:
      return state
  }
}

export default reducer
