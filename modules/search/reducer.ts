import { createReducer } from 'typesafe-actions'
import { SearchState, SearchAction } from './types'
import { searchAsync } from './actions'
import { asyncState, createAsyncReducer, transformToArray } from '../../lib/reducerUtils'

const initialState: SearchState = {
  search: asyncState.initial(),
}

const search = createReducer<SearchState, SearchAction>(initialState).handleAction(
  transformToArray(searchAsync),
  createAsyncReducer(searchAsync, 'search'),
)

export default search
