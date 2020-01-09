import * as actions from './actions'
import { ActionType } from 'typesafe-actions'
import { LoginResult } from '../../api/login'
import { AsyncState } from '../../lib/reducerUtils'
export type LoginAction = ActionType<typeof actions>

export type LoginState = {
  login: AsyncState<LoginResult, Error>
}
