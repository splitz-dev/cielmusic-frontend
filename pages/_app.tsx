import App, { AppContext, AppInitialProps } from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'
import withReduxSaga from 'next-redux-saga'
import '../styles/core.scss'
import createSagaMiddleware from 'redux-saga'
import rootReducer, { rootSaga } from '../modules'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import * as actionCreators from '../modules/layout/actions'
const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = composeWithDevTools({ actionCreators, trace: true, traceLimit: 25 })
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(rootSaga)
class MyApp extends App {
  static async getInitialProps({ Component, ctx }: AppContext): Promise<AppInitialProps> {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {}
    return { pageProps }
  }

  render(): JSX.Element {
    const { Component, pageProps } = this.props
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    )
  }
}

export default withReduxSaga(MyApp)
