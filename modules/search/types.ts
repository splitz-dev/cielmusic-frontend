import * as actions from './actions'
import { ActionType } from 'typesafe-actions'
import { SearchResult } from '../../api/search'
import { AsyncState } from '../../lib/reducerUtils'
export type SearchAction = ActionType<typeof actions>

export type SearchState = {
  search: AsyncState<SearchResult, Error>
}
