import { createReducer } from 'typesafe-actions'

import { ChangeLoadState } from './actions'
import { PlayerAction, PlayerState } from './types'

const initState: PlayerState = {
  loaded: false,
  state: 0,
}
export const player = createReducer<PlayerState, PlayerAction>(initState).handleAction(
  ChangeLoadState,
  (state, action) => ({
    loaded: action.payload.loaded,
    state: action.payload.state,
  }),
)

export default player
