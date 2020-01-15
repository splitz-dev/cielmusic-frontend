import { createAction } from 'typesafe-actions'

export const LayoutChange = createAction('layoutChange', (opt: boolean) => opt)<boolean>()
