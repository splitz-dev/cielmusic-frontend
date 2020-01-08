import { all } from 'redux-saga/effects'
import { watchFetchLogin } from './login'

export default function* rootSaga() {
  try {
    yield all([watchFetchLogin()])
  } catch (err) {
    console.log(err)
  }
}
