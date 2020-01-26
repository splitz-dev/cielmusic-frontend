import { createReducer } from 'typesafe-actions'

import { ChangeLoadState, ChangeState, setYoutube } from './actions'
import { PlayerAction, PlayerState } from './types'

const initState: PlayerState = {
  loaded: false,
  state: 0,
}
export const player = createReducer<PlayerState, PlayerAction>(initState)
  .handleAction(ChangeLoadState, (state, action) => ({
    loaded: action.payload.loaded,
    state: state.state,
  }))
  .handleAction(ChangeState, (state, action) => ({
    loaded: state.loaded,
    state: action.payload.state,
  }))
  .handleAction(setYoutube, (state, action) => ({
    loaded: state.loaded,
    youtube: action.payload.youtube,
    state: state.state,
  }))

export default player
