import { createReducer } from 'typesafe-actions'

import { LayoutChange } from './actions'
import { LayoutState, LayoutAction } from './types'

const initState: LayoutState = {
  option: false,
}
export const layout = createReducer<LayoutState, LayoutAction>(initState).handleAction(
  LayoutChange,
  state => ({
    option: !state.option,
  }),
)

export default layout
export type TodosState = ReturnType<typeof layout>
