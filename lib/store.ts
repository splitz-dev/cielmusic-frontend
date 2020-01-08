import { createStore, applyMiddleware, Store } from 'redux'
import createSagaMiddleware, { Task } from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from './reducers'
import rootSaga from './sagas'

export interface WithSagaTaskStore extends Store {
  sagaTask?: Task
}

const bindMiddleware = (middleware: any) => {
  if (process.env.NODE_ENV !== 'production') {
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}
const configureStore = (initialState = {}): WithSagaTaskStore => {
  const sagaMiddleware = createSagaMiddleware()
  const store: WithSagaTaskStore = createStore(
    reducers,
    initialState,
    bindMiddleware([sagaMiddleware]),
  )
  store.sagaTask = sagaMiddleware.run(rootSaga)

  return store
}

export default configureStore
