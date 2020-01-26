import { searchAsync, SEARCH_START } from './actions'
import { getSearch } from '../../api/search'
import { takeEvery } from 'redux-saga/effects'
import createAsyncSaga from '../../lib/createAsyncSaga'

const searchSaga = createAsyncSaga(searchAsync, getSearch)

export default function* watchSearchSaga() {
  yield takeEvery(SEARCH_START, searchSaga)
}
