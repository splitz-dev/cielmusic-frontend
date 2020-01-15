import { createAsyncAction } from 'typesafe-actions'
import { LoginResult, LoginParams } from '../../api/login'
import { AxiosError } from 'axios'

export const LOGIN_START = 'music/LOGIN_START'
export const LOGIN_SUCCESS = 'music/LOGIN_SUCCESS'
export const LOGIN_FAIL = 'music/LOGIN_FAIL'

export const loginAsync = createAsyncAction(LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL)<
  LoginParams,
  LoginResult,
  AxiosError
>()
