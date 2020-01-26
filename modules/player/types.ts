import * as actions from './actions'
import { ActionType } from 'typesafe-actions'
export type PlayerAction = ActionType<typeof actions>

export type PlayerState = {
  loaded: boolean
  state: number
  youtube?: any
  songInfo?: {
    title?: string
    artist?: string
    thumb?: string
  }
}
