import * as actions from './actions'
import { ActionType } from 'typesafe-actions'
export type PlayerAction = ActionType<typeof actions>

export type PlayerState = {
  state: number // YouTube Player 재생 상태
  songInfo?: {
    title?: string
    artist?: string
    thumb?: string
  }
}
