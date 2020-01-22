import App, { AppContext, AppInitialProps } from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'
import withReduxSaga from 'next-redux-saga'
import '../styles/core.scss'
import createSagaMiddleware from 'redux-saga'
import rootReducer, { rootSaga } from '../modules'
import { createStore, applyMiddleware, compose } from 'redux'

import Layout from '../components/Layout/Main'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}
const sagaMiddleware = createSagaMiddleware()
const composeEnhancers =
  (typeof window != 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

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
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    )
  }
}

export default withReduxSaga(MyApp)
