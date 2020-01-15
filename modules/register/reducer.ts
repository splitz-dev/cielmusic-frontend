import { createReducer } from 'typesafe-actions'
import { RegisterState, RegisterAction } from './types'
import { registerAsync } from './actions'
import { asyncState, createAsyncReducer, transformToArray } from '../../lib/reducerUtils'

const initialState: RegisterState = {
  register: asyncState.initial(),
}

const register = createReducer<RegisterState, RegisterAction>(initialState).handleAction(
  transformToArray(registerAsync),
  createAsyncReducer(registerAsync, 'register'),
)

export default register
