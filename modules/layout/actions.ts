import { createAsyncAction } from 'typesafe-actions'

export const loadPlaybarAsync = createAsyncAction(
  'PLAYBAR_REQUEST',
  'PLAYBAR_SUCCESS',
  'PLAYBAR_FAILURE',
)<undefined, undefined, undefined>()
