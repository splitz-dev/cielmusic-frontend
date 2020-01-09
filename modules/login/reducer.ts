import { createReducer } from 'typesafe-actions'
import { LoginState, LoginAction } from './types'
import { loginAsync } from './actions'
import { asyncState, createAsyncReducer, transformToArray } from '../../lib/reducerUtils'

const initialState: LoginState = {
  login: asyncState.initial(),
}

const login = createReducer<LoginState, LoginAction>(initialState).handleAction(
  transformToArray(loginAsync),
  createAsyncReducer(loginAsync, 'login'),
)

export default login
