import { createAction, ActionType, createReducer } from 'typesafe-actions'
const FETCH_LOGIN_START = 'login/FETCH_LOGIN_START' as const
const FETCH_LOGIN_SUCCESS = 'login/FETCH_LOGIN_SUCCESS' as const
const FETCH_LOGIN_FAIL = 'login/FETCH_LOGIN_FAIL' as const

const fetchLoginStart = createAction('FETCH_LOGIN_START', (email: string, pw: string) => ({
  email,
  pw,
}))
const fetchLoginSuccess = createAction('FETCH_LOGIN_SUCCESS', login => ({ login }))
const fetchLoginFail = createAction('FETCH_LOGIN_FAIL', error => ({ error }))

const actions = { fetchLoginStart, fetchLoginSuccess, fetchLoginFail }
type LoginAction = ActionType<typeof actions>

type LoginState = { error: any; data: any; isLoading: boolean }
type PayloadState = {
  payload: {
    login?: any
    error?: any
  }
}

const defaultState: LoginState = { error: null, data: null, isLoading: false }

export const reducer = createReducer<LoginState, LoginAction>(defaultState, {
  [FETCH_LOGIN_START]: (state: LoginState) => ({ ...state, error: null, isLoading: true }),
  [FETCH_LOGIN_SUCCESS]: (state: LoginState, { payload: { login } }: PayloadState) => ({
    error: null,
    isLoading: false,
    data: login,
  }),
  [FETCH_LOGIN_FAIL]: (state: LoginState, { payload: { error } }: PayloadState) => ({
    error,
    isLoading: false,
    data: [],
  }),
})

export { fetchLoginStart, fetchLoginSuccess, fetchLoginFail }
