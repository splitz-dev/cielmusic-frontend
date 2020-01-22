import { createAction } from 'typesafe-actions'

export const ChangeLoadState = createAction('changeLoadState', action => {
  return (option: boolean) => action(option)
})
