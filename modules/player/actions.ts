import { createAction } from 'typesafe-actions'

export const ChangeLoadState = createAction('changeLoadState', (loaded: boolean) => ({ loaded }))()
