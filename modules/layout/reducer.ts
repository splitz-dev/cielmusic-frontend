import { createReducer } from 'typesafe-actions'

import { LayoutChange } from './actions'
import { LayoutState, LayoutAction } from './types'

const initState: LayoutState = false

export const layout = createReducer<LayoutState, LayoutAction>(initState).handleAction(
  LayoutChange,
  (state: LayoutState) => {
    if (state === false) {
      state = true
    } else {
      state = false
    }
  },
)

export default layout
export type TodosState = ReturnType<typeof layout>
