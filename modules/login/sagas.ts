import { loginAsync, LOGIN_START } from './actions'
import { getLogin } from '../../api/login'
import { takeEvery } from 'redux-saga/effects'
import createAsyncSaga from '../../lib/createAsyncSaga'

const loginSaga = createAsyncSaga(loginAsync, getLogin)

export default function* watchLoginSaga() {
  yield takeEvery(LOGIN_START, loginSaga)
}
