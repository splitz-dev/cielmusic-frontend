import { combineReducers } from 'redux'
import login from './login/reducer'
import layout from './layout/reducer'
import player from './player/reducer'
import search from './search/reducer'
import loginSaga from './login/sagas'
import searchSaga from './search/sagas'
import { all } from 'redux-saga/effects'

const rootReducer = combineReducers({
  login,
  layout,
  player,
  search,
})

// 루트 리듀서를 내보내주세요.
export default rootReducer

// 루트 리듀서의 반환값를 유추해줍니다
// 추후 이 타입을 컨테이너 컴포넌트에서 불러와서 사용해야 하므로 내보내줍니다.
export type RootState = ReturnType<typeof rootReducer>

// 루트 사가를 만들어서 내보내주세요.
export function* rootSaga() {
  yield all([loginSaga(), searchSaga()])
}
