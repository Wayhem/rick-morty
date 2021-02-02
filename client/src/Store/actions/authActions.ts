import { SignupPayload, SigninPayload } from 'Models/authModels'
import { simpleActionCreator, SimpleAction } from 'Store/actions'
import authTypes from 'Store/types/authTypes'

export interface SignUpAction extends SimpleAction {
  payload: SignupPayload
}

export interface SingInAction extends SimpleAction {
  payload: SigninPayload
}

export const createUserAction = ({ username, password, email }: SignupPayload): SignUpAction =>
  simpleActionCreator(authTypes.SIGNUP, { username, password, email })

export const loginUserAction = ({ email, password }: SigninPayload) =>
  simpleActionCreator(authTypes.SIGNIN, { email, password })
