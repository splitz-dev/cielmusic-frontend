import * as actions from './actions'
import { ActionType } from 'typesafe-actions'
import { RegisterResult } from '../../api/register'
import { AsyncState } from '../../lib/reducerUtils'
export type RegisterAction = ActionType<typeof actions>

export type RegisterState = {
  register: AsyncState<RegisterResult, Error>
}
