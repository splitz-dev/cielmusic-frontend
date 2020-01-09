import { call, put } from 'redux-saga/effects'
import { AsyncActionCreatorBuilder } from 'typesafe-actions'

type TPromiseCreatorFunction<P, T> = ((payload: P) => Promise<T>) | (() => Promise<T>)

export default function createAsyncSaga<
  RequestType,
  RequestPayload,
  SuccessType,
  SuccessPayload,
  FailureType,
  FailurePayload
>(
  asyncAction: AsyncActionCreatorBuilder<
    [RequestType, [RequestPayload, undefined]],
    [SuccessType, [SuccessPayload, undefined]],
    [FailureType, [FailurePayload, undefined]]
  >,
  asyncFunction: TPromiseCreatorFunction<RequestPayload, SuccessPayload>,
  successFunc?: any,
  failureFunc?: any,
) {
  return function* saga(action: ReturnType<typeof asyncAction.request>) {
    try {
      const result: SuccessPayload = yield call(asyncFunction, (action as any).payload) // api 호출 이때 파라미터는 request()에서 받은 값으로 전달
      yield put(asyncAction.success(result)) // success  액션함수를 dispatch 하여 api결과값 반환
      if (successFunc) {
        yield call(successFunc, result) // 성공 이후의 추가 액션이 필요할 경우 이에대한  callback 선언
      }
    } catch (e) {
      yield put(asyncAction.failure(e)) // failure  액션함수를 dispatch 하여 error 반환
      if (failureFunc) {
        yield call(successFunc, e) // 실패 이후의 추가 액션이 필요할 경우 이에대한  callback 선언
      }
    }
  }
}
