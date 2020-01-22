import { createReducer } from 'typesafe-actions'

// import { playerChange } from './actions'
import { PlayerState, PlayerAction } from './types'
import { ChangeLoadState } from './actions'

const initState: PlayerState = {
  loaded: false,
  state: -1,
}

export const layout = createReducer<PlayerState, PlayerAction>(initState).handleAction(
  ChangeLoadState,
  (state: PlayerState, action: PlayerAction) => state + action.payload),
)

export default layout
