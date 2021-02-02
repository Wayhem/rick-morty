import { SignupPayload } from 'Models/authModels'
import { simpleActionCreator, SimpleAction } from 'Store/actions'
import authTypes from 'Store/types/authTypes'

export interface SignUpAction extends SimpleAction {
  payload: SignupPayload
}

export const createUserAction = (username: string, password: string, email: string): SignUpAction =>
  simpleActionCreator(authTypes.SIGNUP, { username, password, email })
