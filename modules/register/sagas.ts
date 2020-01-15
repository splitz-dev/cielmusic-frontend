import { registerAsync, REGISTER_START } from './actions'
import { getRegister } from '../../api/register'
import { takeEvery } from 'redux-saga/effects'
import createAsyncSaga from '../../lib/createAsyncSaga'

const registerSaga = createAsyncSaga(registerAsync, getRegister)

export default function* watchLoginSaga() {
  yield takeEvery(REGISTER_START, registerSaga)
}
