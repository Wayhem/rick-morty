/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Action } from 'redux'

export interface SimpleAction extends Action {
  type: string;
  payload: any;
}

export const simpleActionCreator = (type: string, payload?: any): SimpleAction => ({
  type,
  payload
})
