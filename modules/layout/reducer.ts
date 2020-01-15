import { createReducer } from 'typesafe-actions'

import { loadPlaybarAsync } from './actions'

export const layout = createReducer(false as boolean)
  .handleAction([loadPlaybarAsync.request], (state: boolean, action: any) => true)
  .handleAction(
    [loadPlaybarAsync.success, loadPlaybarAsync.failure],
    (state: boolean, action: any) => false,
  )

export default layout
export type TodosState = ReturnType<typeof layout>
