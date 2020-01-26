import { createAsyncAction } from 'typesafe-actions'
import { SearchResult, SearchParams } from '../../api/search'
import { AxiosError } from 'axios'

export const SEARCH_START = 'SEARCH_START'
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS'
export const SEARCH_FAIL = 'SEARCH_FAIL'

export const searchAsync = createAsyncAction(SEARCH_START, SEARCH_SUCCESS, SEARCH_FAIL)<
  SearchParams,
  SearchResult,
  AxiosError
>()
