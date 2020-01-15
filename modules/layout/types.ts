import * as actions from './actions'
import { ActionType } from 'typesafe-actions'
export type LayoutAction = ActionType<typeof actions>

export type LayoutState = boolean | void
