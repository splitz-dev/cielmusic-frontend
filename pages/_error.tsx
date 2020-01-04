import React from 'react'
import Error from 'next/error'
import { NextPageContext } from 'next'

interface Props {
  errorCode: number
}

const ErrorPage = ({ errorCode }: Props) => {
  if (errorCode === 404) {
    return <meta httpEquiv="refresh" content="0; url=/" />
  }
  return <Error statusCode={errorCode} />
}

ErrorPage.getInitialProps = async (ctx: NextPageContext) => {
  if (!ctx.res) return
  const errorCode = ctx.res.statusCode > 200 ? ctx.res.statusCode : false

  return { errorCode }
}

export default ErrorPage
