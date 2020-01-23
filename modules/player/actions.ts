import { createAction } from 'typesafe-actions'

export const ChangeLoadState = createAction('changeLoadState', (loaded: boolean) => ({ loaded }))()
export const ChangeState = createAction('changeState', (state: number) => ({ state }))()
