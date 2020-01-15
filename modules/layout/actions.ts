import { createAction } from 'typesafe-actions'

export const LayoutChange = createAction('LAYOUT_CHANGE')<boolean>()
