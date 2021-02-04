import { AnyAction } from 'redux'
import characterTypes from 'Store/types/charactersTypes'
import { Character } from 'Models/charactersModels'

export interface CharactersState {
  characterList: Character[];
  charactersLoading: boolean;
}

const initialState: CharactersState = {
  characterList: [],
  charactersLoading: false
}

const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case characterTypes.CHARACTERS_SUCCESS:
      return { ...state, characterList: action.payload, charactersLoading: false }
    case characterTypes.CHARACTERS_ERROR:
      return { ...state, charactersLoading: false }
    case characterTypes.CHARACTERS_PENDING:
      return { ...state, charactersLoading: true }
    default:
      return state
  }
}

export default reducer
