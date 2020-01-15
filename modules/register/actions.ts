import { createAsyncAction } from 'typesafe-actions'
import { RegisterResult, RegisterParams } from '../../api/register'
import { AxiosError } from 'axios'

export const REGISTER_START = 'music/REGISTER_START'
export const REGISTER_SUCCESS = 'music/REGISTER_SUCCESS'
export const REGISTER_FAIL = 'music/REGISTER_FAIL'

export const registerAsync = createAsyncAction(REGISTER_START, REGISTER_SUCCESS, REGISTER_FAIL)<
  RegisterParams,
  RegisterResult,
  AxiosError
>()
