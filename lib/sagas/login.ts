import { take, put, call } from 'redux-saga/effects'
import axios from 'axios'
import { fetchLoginStart, fetchLoginSuccess, fetchLoginFail } from '../reducers/login'

export function* fetchLogin(email: string, pw: string) {
  const url = process.env.API_URL
  const params = {
    email,
    pw,
  }

  try {
    const { data: login } = yield call([axios, 'post'], url, { params })
    yield put(fetchLoginSuccess(login))
  } catch (error) {
    yield put(fetchLoginFail(error))
  }
}

export function* watchFetchLogin() {
  while (true) {
    const {
      payload: { email, pw },
    } = yield take(fetchLoginStart)
    yield call(fetchLogin, email, pw)
  }
}
