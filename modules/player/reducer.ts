import { createReducer } from 'typesafe-actions'

// import { playerChange } from './actions'
import { PlayerState, PlayerAction } from './types'

const initState: PlayerState = {
  state: -1,
}
export const layout = createReducer<PlayerState, PlayerAction>(initState)

export default layout
