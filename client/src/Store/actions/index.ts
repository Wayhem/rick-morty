import { Action } from 'redux'

export interface SimpleAction extends Action {
  payload: any
}

export const simpleActionCreator = (type: string, payload?: any): SimpleAction => ({
  type,
  payload
})
