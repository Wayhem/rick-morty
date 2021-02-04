import { AnyAction } from 'redux'
import characterTypes from 'Store/types/charactersTypes'
import { Character } from 'Models/charactersModels'

export interface CharactersState {
  characterList: Character[]
}

const initialState: CharactersState = {
  characterList: [],
}

const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case characterTypes.CHARACTERS_SUCCESS:
      return { ...state, characterList: action.payload }
    default:
      return state
  }
}

export default reducer
